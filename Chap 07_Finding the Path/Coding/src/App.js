import '../style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { IMG_CDN_URL } from './constants';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './About';
import Error from './Error';
import Contact from './Contact';
import RestaurantMenu from './components/RestaurantMenu';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { restaurantList } from '../RestaurantListDB';

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />

      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/restaurantmenu/:resId',
        element: <RestaurantMenu />,
      },
    ],
  },

  ,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
