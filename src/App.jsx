import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./features/ui/Home";
import Menu,{ loader as menuLoader } from "./features/menu/menu";
import Cart from "./features/cart/Cart";
import CreateOrder,{action as createAction} from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./features/ui/AppLayout";
import Error from "./features/ui/Error";
import { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement:<Error/>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement:<Error/>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement:<Error/>,
        action: updateOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
