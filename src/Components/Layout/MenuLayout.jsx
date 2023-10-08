import React from "react";
import { MenuItems } from "../index.js";
import { Metronome } from "@uiball/loaders";
import { useMenu } from "../../context/MenuContext.jsx";

const MenuLayout = () => {
  const { menu, error, loading } = useMenu();
  console.log(menu);

  if (loading)
    return (
      <div className="fixed left-1/2 top-1/2 ">
        <Metronome size={40} speed={1.6} color="#ed7c12" />
      </div>
    );

  if (error) return <p>Something went wrong!</p>;

  return (
    <section className="grid justify-between gap-5 py-5 grid-cols-menu-small-screens md:grid-cols-menu-items ">
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
