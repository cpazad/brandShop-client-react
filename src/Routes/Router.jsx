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
                path:"/updateproduct/:id",
                element:<UpadateProduct></UpadateProduct>,
                loader: ({params}) => fetch(`https://brand-shop-server-eknwej4dk-azadur-rahmans-projects.vercel.app/${params.id}`)
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
            },
            {
                path:"/test",
                element: <Test></Test>
            },
            {
                path:"/brand/:brandname",
                element:<BrandDetails></BrandDetails>,
                loader:({params})=> fetch(`https://brand-shop-server-eknwej4dk-azadur-rahmans-projects.vercel.app/${params.brandname}`)
            }
           
        ]
    }
])

export default router