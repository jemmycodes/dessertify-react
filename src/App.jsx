import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Menu, NotFound, Cart, Signup, Login } from "./Pages";
import { MenuLayout, RootLayout } from "./Components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          children: [
            { index: true, element: <Home /> },
            {
              path: "/menu",
              element: <Menu />,

              children: [
                {
                  path: ":menutype",
                  element: <MenuLayout />,
                },
              ],
            },

            {
              path: "login",
              element: <Login />,
            },
            {
              path: "Signup",
              element: <Signup />,
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
