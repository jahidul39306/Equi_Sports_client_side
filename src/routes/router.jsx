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
import DetailsPgae from "../pages/DetailsPgae";
import UpdateEquipmentPage from "../pages/UpdateEquipmentPage";

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
                element: <PrivateRoute>
                    <MyEquipmentPage></MyEquipmentPage>
                </PrivateRoute>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/registration",
                element: <RegistrationPage></RegistrationPage>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute>
                    <DetailsPgae></DetailsPgae>
                </PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: "/update-equipment/:id",
                element: <PrivateRoute>
                    <UpdateEquipmentPage></UpdateEquipmentPage>
                </PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;