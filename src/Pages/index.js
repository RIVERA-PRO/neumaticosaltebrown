import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import PageDetail from '../Pages/PageDetail/PageDetail'
import PageProductos from "./PageProductos/PageProductos";
import Contacto from "./Contacto/Contacto";
import Nosotros from "./Nosotros/Nosotros";
import Sucursales from "./Sucursales/Sucursales";
import ServiciosPage from "./ServiciosPage/ServiciosPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,

    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/producto/:id/:producto",
                element: <PageDetail />,
            },
            {
                path: "/tienda",
                element: <PageProductos />,
            },
            {
                path: "/contacto",
                element: <Contacto />,
            },
            {
                path: "/quienes-somos",
                element: <Nosotros />,
            },
            {
                path: "/sucursales",
                element: <Sucursales />,
            },
            {
                path: "/servicios",
                element: <ServiciosPage />,
            },
        ],
    },
]);
