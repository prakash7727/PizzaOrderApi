import { useState } from "react";
import { useNavigate} from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function onSubmit(e){
      e.preventDefault();
      if(!query) return;
      navigate(`/order/${query}`);
      setQuery();

  }
  return (
    <>
      <form onSubmit={onSubmit}>
      <input
        placeholder="serach order ...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full outline-none px-4 py-2 text-sm bg-yellow-100 sm:w-65"
      />
      </form>
    </>
  );
}
export default SearchOrder;
