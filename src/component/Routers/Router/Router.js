import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Pages/DashBoards/AddProduct/AddProduct";
import AllUsesrs from "../../Pages/DashBoards/AllUsers/AllUsesrs";
import DadhBoardLayOut from "../../Pages/DashBoards/DadhBoardLayOut/DadhBoardLayOut";
import MyOrdare from "../../Pages/DashBoards/MyOrdare/MyOrdare";
import Home from "../../Pages/Home/Home/Home";
import Review from "../../Pages/Home/Review/Review";
import SpareParts from "../../Pages/Home/SpareParts/SpareParts";
import LogIn from "../../Pages/LogIn/LogIn";
import Main from "../../Pages/Main/Main";
import SignUp from "../../Pages/SignUP/SignUp";
import AdminRouter from "../AdminRouter/AdminRouter";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SellerRouter from "../SellerRouter/SellerRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/spareparts',
                element: <SpareParts></SpareParts>
            },
            {
                path: '/reviews/:id',
                element: <PrivateRouter><Review></Review></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DadhBoardLayOut></DadhBoardLayOut></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrdare></MyOrdare>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRouter><AddProduct></AddProduct></SellerRouter>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRouter><AllUsesrs></AllUsesrs></AdminRouter>
            },
        ]
    }
])

export default router;