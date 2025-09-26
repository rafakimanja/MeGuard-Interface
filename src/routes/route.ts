import App from "@/App";
import RootLayout from "@/components/root-layout";
import { CountPage } from "@/pages/count/count";
import CountFormPage from "@/pages/form/count-form";
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
            { path: '/count', Component: CountPage }
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
