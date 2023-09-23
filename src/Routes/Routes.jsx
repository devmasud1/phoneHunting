import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import LogIn from "../Pages/LogIn/LogIn";
import Phone from "../Pages/Phone/Phone";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/phones.json')
        },
        {
            path: "/favorites",
            element: <Favorites></Favorites>
        },
        {
            path: "/logIn",
            element: <LogIn></LogIn>
        },
        {
            path: `/phone/:id`,
            element: <Phone></Phone>,
            loader: () => fetch('/phones.json')
        }
    ]
  },
]);

export default Routes;
