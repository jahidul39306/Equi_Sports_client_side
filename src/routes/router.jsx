import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AddEquipmentPage from "../pages/AddEquipmentPage";
import AllEquipmentPage from "../pages/AllEquipmentPage";
import MyEquipmentPage from "../pages/MyEquipmentPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/add-equipment",
                element: (
                    <PrivateRoute>
                        <AddEquipmentPage></AddEquipmentPage>
                    </PrivateRoute>
                )
            },
            {
                path: "/all-equipment",
                element: <AllEquipmentPage></AllEquipmentPage>,
            },
            {
                path: "/my-equipment",
                element: <MyEquipmentPage></MyEquipmentPage>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/registration",
                element: <RegistrationPage></RegistrationPage>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;