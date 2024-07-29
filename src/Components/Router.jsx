import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ShopPage from "./ShopPage/ShopPage";
import ShopCart from "./ShopCart/ShopCart";
import Checkout from "./Checkout/Checkout";
import UserAcount from "./UserAcount/UserAcount";
import MyAccount from "./MyAcount/MyAccount";



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
    },
    {
    path:"/Checkout",
    element:<Checkout/>
    },
    {
        path:"/UserAcount",
        element:<UserAcount/>
    },
    {
        path:'/MyAccount',
        element:<MyAccount/>
    }
    
])

export default router;