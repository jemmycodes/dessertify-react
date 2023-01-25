import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import ErrorPage from "./Components/ErrorElement/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import RootLayout from "./Components/Layout/RootLayout";
import Index from "./Components/Ui/Index";
import MenuContainer from "./Components/Menu/MenuContainer";
import AppProvider from "./context/AppProvider";
import { useEffect } from "react";
import { loader as getCurrentPageData } from "./Components/Menu/MenuContainer";

function App() {
  // getting menu data from an external API
  const getData = async () => {
    const response = await fetch(
      "https://freerandomapi.cyclic.app/api/v1/desserts?limit=100"
    );
    const data = await response.json();

    // store data in local storage
    localStorage.setItem("menu", JSON.stringify(data.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { path: "/", element: <Home /> },
            {
              path: "/menu",
              element: <Menu />,
              children: [
                {
                  index: true,
                  element: <Index />,
                },
                {
                  path: "menu/:menutype",
                  element: <MenuContainer />,
                  loader: getCurrentPageData,
                },
              ],
            },
            { path: "/about", element: <About /> },
            { path: "/login", element: <Login /> },
            { path: "/services", element: <Services /> },
          ],
        },
      ],
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />;
    </AppProvider>
  );
}

export default App;
