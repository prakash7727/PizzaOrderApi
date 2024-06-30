import PropTypes from 'prop-types';
import { formatCurrency } from "../../helper";
import DeleteItem from './DeleteItem';
import UpdateItemQty from './UpdateItemQty';
import { getCurrentQuantityById } from './cartSlice';
import { useSelector} from "react-redux";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuality = useSelector(getCurrentQuantityById(pizzaId));
  
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-end sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <UpdateItemQty pizzaId={pizzaId} currentQuality={currentQuality}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
