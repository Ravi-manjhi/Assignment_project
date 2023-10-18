import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./features/sidebar/Sidebar";
import "./styles/globalStyle.scss";
import Home from "./pages/home/Home";
import Header from "./features/header/Header";
import Product from "./pages/product/Product";
import Customers from "./pages/customers/Customers";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Profile from "./pages/profile/Profile";
import Products from "./pages/products/Products";

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Products />,
      },
      {
        path: "customer",
        element: <Customers />,
      },
      {
        path: "help",
        element: <PageNotFound isBuild={false} />,
      },
      {
        path: "income",
        element: <PageNotFound isBuild={false} />,
      },
      {
        path: "promote",
        element: <PageNotFound isBuild={false} />,
      },
      { path: "customer/:id", element: <Profile /> },
      { path: "product/:id", element: <Product /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
