import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts";
import { HouseDetail } from "./pages/HouseDetail";
import Main from "./pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "detail/:id",
        element: <HouseDetail />,
      },
    ],
  },
]);
