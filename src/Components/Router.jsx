import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ShopPage from "./ShopPage/ShopPage";


const router =createBrowserRouter([
   
    {
        path:"/",
        element: <App/>
    },
    {
       path:"/ShopPage",
       element:<ShopPage/>
    
    },
    
])

export default router;