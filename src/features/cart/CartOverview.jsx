import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {  getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../helper";

function CartOverview() {
  const totalCartQuanity = useSelector(getTotalCartQuantity);
  const totalCartPrice =useSelector(getTotalCartPrice);

 if(!totalCartQuanity) return null;


      return (
        <div className="bg-stone-800 text-white uppercase p-4 py-4 sm:px-6 md:text-base flex items-center justify-between">
          <p className="sm:space-x-6 space-x-4 font-semibold text-stone-300">
            <span>{totalCartQuanity} pizzas</span>
            <span>{formatCurrency(totalCartPrice)}</span>
          </p>
          <Link to="/cart">Open cart &rarr;</Link>
        </div>
      );
    }
    
    export default CartOverview;