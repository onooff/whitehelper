import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './Layouts';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import { HouseDetail } from './pages/HouseDetail';
import HouseBook from './pages/HouseBook';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'detail/:id',
        element: <HouseDetail />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'book',
        element: <HouseBook />,
      },
      {
        path: 'search',
        element: <Navigate to="/" />,
      },
      {
        path: 'search/:keyword',
        element: <Search />,
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
    ],
  },
]);

// "
