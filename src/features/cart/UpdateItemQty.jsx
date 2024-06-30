import { decItem, incItem } from "./cartSlice";
import { useDispatch} from "react-redux";
import PropTypes from "prop-types";

function UpdateItemQty({pizzaId,currentQuality}){
      const dispatch = useDispatch();
      return (
            <><div className="flex items-center gap-3 ">
            <button onClick={()=>dispatch(decItem(pizzaId))} className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">-</button>
            <span>{currentQuality}</span>
            <button onClick={()=> dispatch(incItem(pizzaId))} className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center">+</button></div>
            </>
      )
}
UpdateItemQty.propTypes = {
      pizzaId: PropTypes.number.isRequired ,
      currentQuality: PropTypes.number.isRequired 
    };
export default UpdateItemQty;