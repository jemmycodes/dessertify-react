import React from "react";
import { MenuLayout, RootLayout } from "./Components";
import { Home, Menu, NotFound, Cart, Signup, Login, Profile } from "./Pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
          path: "profile",
          element: <Profile />,
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
