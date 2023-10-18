import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home"
import AddProduct from "../Pages/AddProduct"
import UpadateProduct from "../Pages/UpadateProduct"
import Login from "../Pages/Login"
import Registration from "../Pages/Registration"
import MyCart from "../Pages/MyCart"
import ProductDetails from "../Pages/ProductDetails"


const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/addproduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/updateproduct",
                element:<UpadateProduct></UpadateProduct>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/mycart",
                element:<MyCart></MyCart>
            },
            {
                path:"/productdetails",
                element:<ProductDetails></ProductDetails>
            }
           
        ]
    }
])

export default router