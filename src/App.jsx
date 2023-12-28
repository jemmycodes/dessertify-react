import React, { useEffect } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Home, Menu, NotFound, Cart, Signup, Login } from "./Pages";
import {  MenuLayout, RootLayout } from "./Components";

const App = () => {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },

        {
          path: "menu",
          element: <Menu />,
          children: [
            {
              path: ":menutype",
              element: <MenuLayout />,
            },
          ],
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
