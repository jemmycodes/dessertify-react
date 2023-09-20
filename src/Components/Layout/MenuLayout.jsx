import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MenuItems } from "../index.js";
import { useCallback } from "react";

const MenuLayout = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { menutype } = useParams();

  const presentUrl =
    menutype === "desserts"
      ? "https://freerandomapi.cyclic.app/api/v1/desserts?limit=100"
      : `https://freerandomapi.cyclic.app/api/v1/desserts?category=${menutype}&limit=50`;

  useEffect(() => {
    setLoading(true);
    const fetchMenu = async () => {
      try {
        const { data } = await axios.get(presentUrl);
        setData(data.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [presentUrl]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;

  return (
    <section className="grid gap-4 py-4 grid-cols-menu-items">
      {data &&
        data.map((item, index) => (
          <MenuItems
            image={item.photoUrl}
            description={item.description}
            key={item._id}
            name={item.name}
            price={index * 11}
          />
        ))}
    </section>
  );
};

export default MenuLayout;
