import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SingleService from "../pages/SingleService";
import DashboardLayout from "../layout/DashboardLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";
import AllServices from "../pages/DashboardPage/AllServices";
import AddService from "../pages/DashboardPage/AddService";
import DashboardHomePage from "../pages/DashboardPage/DashboardHomePage";
import EditPage from "../pages/DashboardPage/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <SingleService />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <DashboardHomePage /> },
      { path: "all-service", element: <AllServices /> },
      { path: "add-service", element: <AddService /> },
      {
        path: "edit-page/:id",
        element: (
          <PrivateRoutes>
            <EditPage />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);

export default router;
