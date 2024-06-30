import PropTypes from "prop-types";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
function UpdateOrder() {
  //console.log(order);
  const fetcher = useFetcher();

  return (
    <>
      <fetcher.Form method="PATCH" className="text-right">
        <button className="px-4 py-3 md:px-6 md:py-4 inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed">
          Make Priority
        </button>
      </fetcher.Form>
    </>
  );
}
UpdateOrder.propTypes = {
  order: PropTypes.object,
};
export async function action({ params }) {
      const data = {priority: true};
      await updateOrder(params.orderId, data)
      return null;
}
export default UpdateOrder;

