import { Link } from "react-router-dom";
import Button from "../../Button";
import LinkButton from "../ui/LinkButton";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";


function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-400 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item,index) => (
          <CartItem item={item} key={index} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button>
          <Link to="/order/new">Order Pizzas</Link>
        </Button>
        {/* <Button onClick={()=>dispatch(clearCart(cart))}>Clear cart</Button> */}
        <button className="bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full transition-colors duration-400 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2" onClick={()=>dispatch(clearCart(cart))}>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
