import PropTypes from 'prop-types';
import { formatCurrency } from "../../helper";

function OrderItem({ item , ingredients, isLoadingIngredients}) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className='py-4'>
      <div className='flex items-center justify-between gap-4 text-sm'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> {name}
        </p>
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
      </div>
      <p>{isLoadingIngredients ? 'loading...' :( ingredients ? ingredients.join(', ') : ' ')}</p>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.array.isRequired
};

export default OrderItem;
