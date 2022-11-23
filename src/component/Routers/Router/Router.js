import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import SpareParts from "../../Pages/Home/SpareParts/SpareParts";
import Main from "../../Pages/Main/Main";

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
            }

        ]
    }
])

export default router;