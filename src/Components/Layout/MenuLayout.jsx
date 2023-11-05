import React from "react";
import { MenuItems } from "../index.js";
import { Metronome } from "@uiball/loaders";
import {useFetch} from "../../hooks/useFetch"
import { filterArray } from "../../utils/utils.js";
import { useSearchParams} from "react-router-dom";

const MenuLayout = () => {

  const [searchParams] = useSearchParams();

      const { loading, error, data } = useFetch();

  const searchValue = searchParams.get("search")?.trim();

  if (loading)
    return (
      <div className="fixed left-1/2 top-1/2 ">
        <Metronome size={40} speed={1.6} color="#ed7c12" />
      </div>
    );

  if (error) return <p>Something went wrong!</p>;

  const filteredData = filterArray(data, searchValue);

  if (searchValue && filteredData.length === 0) {
    return (
      <p>
        No result found for{" "}
        <span className="font-bold text-orange">&apos;{searchValue}&apos;</span>
      </p>
    );
  }

  return filteredData.map((item, index) => (
    <MenuItems
      key={item._id}
      price={index * 10}
      description={item.description}
      name={item.name}
      image={item.photoUrl}
      category={item.category}
    />
  ));
};

export default MenuLayout;
