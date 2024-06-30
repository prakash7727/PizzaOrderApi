import PropTypes from "prop-types";
import { formatCurrency } from "../../helper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQty from "../cart/UpdateItemQty";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, imageUrl, soldOut, ingredients } = pizza;

  const dispatch = useDispatch();
  const currentQuality = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuality > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-4">
      <img src={imageUrl} alt={name} className="h-24" />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-stone-500">Sold out</p>
          )}
          {isInCart && (<div className="flex items-center gap-3 sm:gap-8"><UpdateItemQty pizzaId={id} currentQuality={currentQuality}/><DeleteItem pizzaId={id}/> </div>)}
          {!soldOut && !isInCart && (
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 uppercase font-semibold text-stone-800 py-2 px-3 inline-block tracking-wide rounded-full transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    unitPrice: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    soldOut: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MenuItem;
