import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Review from "../../Pages/Home/Review/Review";
import SpareParts from "../../Pages/Home/SpareParts/SpareParts";
import LogIn from "../../Pages/LogIn/LogIn";
import Main from "../../Pages/Main/Main";
import SignUp from "../../Pages/SignUP/SignUp";

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
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/login',
                element: <LogIn></LogIn> 
            },
            {
                path: '/register',
                element:<SignUp></SignUp>
            }


        ]
    }
])

export default router;