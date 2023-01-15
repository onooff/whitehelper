import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts";
import Main from "./pages/Main";
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import { HouseDetail } from "./pages/HouseDetail";

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
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
