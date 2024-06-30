import { Link } from "react-router-dom";
import Button from "../../Button";
import CreateUser from "../user/CreateUser";
import  { useSelector } from "react-redux";

function Home() {
  const username = useSelector((state) => state.user.username);
      return (
        <div className="my-10 text-center sm:my-15 px-4">
          <h1 className="mb-8 text-xl text-stone-700 font-semibold text-center md:text-3xl">
            The best pizza.
            <br />
           <span className="text-yellow-500"> Straight out of the oven, straight to you.</span>
          </h1>
          {username === '' ? (<CreateUser/>) : (<Button><Link to="menu">Continue ordering,  {username}</Link></Button>)}
        </div>
      );
    }
    
    export default Home;