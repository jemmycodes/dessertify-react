import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Menu } from "./Pages";
import { MenuLayout, RootLayout } from "./Components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: "error",
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
          ],
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
