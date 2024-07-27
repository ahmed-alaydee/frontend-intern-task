import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ShopPage from "./ShopPage/ShopPage";
import ShopCart from "./ShopCart/ShopCart";



const router =createBrowserRouter([
   
    {
        path:"/",
        element: <App/>
    },
    {
       path:"/ShopPage",
       element:<ShopPage/>
    },{
        path:"/shopcart",
        element:<ShopCart/>
    }
])

export default router;