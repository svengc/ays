import App from "../App";
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import ProductDetail from "../pages/ProductDetail";

export const routerApp = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "colecciones",
                element: <Collections />,
            },
            {
                path: "colecciones/:id",
                element: <ProductDetail />
            }
        ]
    }
];