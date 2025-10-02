import App from "@/App";
import RootLayout from "@/components/root-layout";
import AcountPage from "@/pages/acount/acount";
import CountFormPage from "@/pages/form/form";
import LoginPage from "@/pages/login/Login";
import RegisterPage from "@/pages/register/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, Component: App },
            { path: '/form', Component: CountFormPage },
            { path: '/count', Component: AcountPage }
        ]
    },
    {
        path: '/auth',
        Component: LoginPage
    },
    {
        path: '/register',
        Component: RegisterPage
    },
])
