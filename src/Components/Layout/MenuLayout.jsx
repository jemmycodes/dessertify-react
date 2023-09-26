import React from "react";
import { MenuItems } from "../index.js";
import { useMenu } from "../../context/MenuContext.jsx";

const MenuLayout = () => {
  const { menu, error, loading } = useMenu();
  console.log(menu);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;

  return (
    <section className="grid gap-4 py-4 grid-cols-1 md:grid-cols-menu-items">
      {menu.map((item, index) => (
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
