import axios from "axios";
import { useParams } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

const { Provider } = MenuContext;

//eslint-disable-next-line
const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateMenu = (menu) => {
    setMenu(menu);
  };

  useEffect(() => {
    setLoading(true);

    const fetchMenu = async () => {
      try {
        const { data } = await axios.get(
          "https://freerandomapi.cyclic.app/api/v1/desserts?limit=100"
        );
        // console.log(presentUrl);
        setMenu(data.data);
        console.log(data.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <Provider value={{ menu, error, loading, updateMenu }}>{children}</Provider>
  );
};
const useMenu = () => useContext(MenuContext);
export { MenuProvider, useMenu };
