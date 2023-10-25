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
import Test from "../Pages/Test"
import BrandDetails from "../Pages/BrandDetails"
import PrivateRoute from "./PrivateRoute"


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
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"/updateproduct/:id",
                element:<PrivateRoute><UpadateProduct></UpadateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-a1sdkzu8b-azadur-rahmans-projects.vercel.app/product/${params.id}`)
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
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-a1sdkzu8b-azadur-rahmans-projects.vercel.app/product/${params.id}`)
            },
            {
                path:"/productdetails/:id",
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path:"/test",
                element: <Test></Test>
            },
            {
                path:"/brand/:brandname",
                element:<BrandDetails></BrandDetails>,
                loader:({params})=> fetch(`https://brand-shop-server-a1sdkzu8b-azadur-rahmans-projects.vercel.app/product/${params.brandname}`)
            }
           
        ]
    }
])

export default router