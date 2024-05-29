import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Shop from "../pages/shop/Shop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/shop/:category',
                element: <Shop></Shop>
            }
        ]
    },
]);