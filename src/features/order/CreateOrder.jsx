import { useState } from "react";
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../Button";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../helper";
import store from "../../store";
import { fetchAddress } from "../../userSlice";

//https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {username, status: addressStatus, position, address, error:addError  }= useSelector((state) => state.user);

  const isLoadingAdd = addressStatus === 'loading';

  const navigation = useNavigation();
  const onSubmiting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch(fetchAddress);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-20 py-6 p-5">
      <h2 className="text-lg text-yellow-800 mb-8">Ready to order go!</h2>
      <Form method="POST">
        <div>
          <label>First Name:</label>
          <div>
            <input
              type="text"
              name="customer"
              required
              className="input"
              defaultValue={username}
            />
          </div>
        </div>

        <div>
          <label>Phone number:</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {formErrors?.phone && <p className="text-red-600">{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address:</label>
          <div className="">
            <input type="text" defaultValue={address} name="address" required className="input" />
           {!position.latitude && !position.longitude && <button className="bg-yellow-400 absolute w-[120px] h-10 font-semibold text-stone-800 py-2 px-2 inline-block tracking-wide rounded-full transition-colors duration-400 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 items-center justify-center" disabled={isLoadingAdd} onClick={(e) =>{e.preventDefault(); dispatch(fetchAddress())}}>Get position</button>}
          </div>
          {addressStatus === 'error' && <p className="text-red-700">{addError}</p>}
        </div>

        <div className="p-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.longitude && position.latitude ? `${position.latitude},${position.longitude}` : ' '} />
          <Button disabled={onSubmiting || isLoadingAdd}>
            {onSubmiting
              ? "placing order.."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  //console.log(order)
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your phone number. We might need it to conect you";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
