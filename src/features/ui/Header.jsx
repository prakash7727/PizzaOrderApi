import { Link } from "react-router-dom";
import SearchOrder from "../order/Searchorder";
import UserName from "./userName";

function Header(){
      return(
            <><header className="flex items-center justify-between bg-yellow-500 border-b border-stone-100 uppercase px-4 py-3 sm:px-6">
                  <Link to="/" className="tracking-widest" >Fast React Pizza</Link>
                  <SearchOrder/>
                  <UserName/>
            </header>
            </>
      )
}
export default Header;