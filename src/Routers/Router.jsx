import { createBrowserRouter } from "react-router";
import MainLayouts from "../LayOuts/MainLayouts";
import Home from "../Pages/Home";
import PetsSupplies from "../Pages/PetsSupplies";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import MyOrders from "../Pages/MyOrders";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivetRouter from "./PrivetRouter";
import ProductDetails from "../Pages/ProductDetails";
import Update from "../Pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/petsSupplies",
    Component: PetsSupplies,
  },
  {
    path: "/addListing",
    element: (
      <PrivetRouter>
        <AddListing />
      </PrivetRouter>
    ),
  },
  {
    path: "/myListings",
    element: (
      <PrivetRouter>
        <MyListings />
      </PrivetRouter>
    ),
  },
  {
    path: "/myOrders",
    element: (
      <PrivetRouter>
        <MyOrders />
      </PrivetRouter>
    ),
  },
  {
    path: "/logIn",
    Component: LogIn,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/productsDetails/:id",
    element: (
      <PrivetRouter>
        <ProductDetails />
      </PrivetRouter>
    ),
    loader: ({ params }) =>
      fetch(`https://pawmart-store-server.vercel.app/products/${params.id}`),
    hydrateFallbackElement: <h1> Loading.....</h1>,
  },
  {
    path: "/productUpdate/:id",
    element: (
      <PrivetRouter>
        <Update />
      </PrivetRouter>
    ),
    loader: ({ params }) =>
      fetch(`https://pawmart-store-server.vercel.app/products/${params.id}`),
    hydrateFallbackElement: <h1> Loading.....</h1>,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
