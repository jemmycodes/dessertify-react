import React from "react";
import { MenuItems } from "../index.js";
import { Metronome } from "@uiball/loaders";
import { useFetch } from "../../hooks";
import { useSearchParams, useParams, useLocation } from "react-router-dom";

const MenuLayout = () => {
  const { menutype } = useParams();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const url =
    pathname === "/menu/desserts"
      ? "https://freerandomapi.cyclic.app/api/v1/desserts?limit=120"
      : `https://freerandomapi.cyclic.app/api/v1/desserts?category=${menutype}`;
  const { data, loading, error } = useFetch(url);
  const searchValue = searchParams.get("search")?.trim();

  if (loading)
    return (
      <div className="fixed left-1/2 top-1/2 ">
        <Metronome size={40} speed={1.6} color="#ed7c12" />
      </div>
    );

  if (error) return <p>Something went wrong!</p>;

  if (searchValue) {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (searchValue.length && !filteredData.length)
      return (
        <p>
          No result found for{" "}
          <span className="font-bold text-orange">
            &apos;{searchValue}&apos;
          </span>
        </p>
      );

    return filteredData.map((item, index) => (
      <MenuItems
        key={item._id}
        price={index * 10}
        description={item.description}
        name={item.name}
        image={item.photoUrl}
      />
    ));
  }

  return data.map((item, index) => (
    <MenuItems
      key={item._id}
      id={item._id}
      price={index * 10}
      description={item.description}
      name={item.name}
      image={item.photoUrl}
    />
  ));
};

export default MenuLayout;
