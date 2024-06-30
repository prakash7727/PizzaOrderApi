import PropTypes from 'prop-types';
//import Button from "../../Button";
import { deleteItem } from './cartSlice';
import { useDispatch } from "react-redux";

function DeleteItem({pizzaId}) {
      const dispatch = useDispatch();
  return (
    <>
      <button className="bg-yellow-400 uppercase font-semibold text-stone-800 py-2 px-2 inline-block tracking-wide rounded-full transition-colors duration-200 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 h-10" onClick={() => dispatch(deleteItem(pizzaId))}>Delete</button>
    </>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired 
};

export default DeleteItem;
