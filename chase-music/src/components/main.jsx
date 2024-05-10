import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { createBrowserRouter, ReactProvider } from "react-router";
import Dashboard from "./layouts/DashboardLayout";
import About from "./About";
import ContactUs from "./ContactUs";
import Register from "./Register";
const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <ContactUs />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);