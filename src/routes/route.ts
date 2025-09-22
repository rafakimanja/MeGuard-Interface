import App from "@/App";
import RootLayout from "@/components/root-layout";
import LoginPage from "@/pages/login/Login";
import RegisterPage from "@/pages/register/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, Component: App }
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
