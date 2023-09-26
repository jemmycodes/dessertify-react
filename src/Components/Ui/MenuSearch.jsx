import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useMenu } from "../../context/MenuContext";

const MenuSearch = () => {
  const [search, setSearch] = useState("");
  const { menu, updateMenu } = useMenu();

  const handleSearch = (e) => {
    e.preventDefault();

    const value = e.target.value;

    setSearch(value);

    const filteredMenu = menu.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    updateMenu(filteredMenu);
  };

  return (
    <div className="relative">
      <input
        type="text"
        id="search"
        className="px-6 py-4 pl-12 text-xs rounded-full max-w-xs w-full focus:outline-none focus:shadow-lg"
        placeholder="Search"
        autoComplete="on"
        value={search}
        onChange={handleSearch}
        required
      />
      <MdOutlineSearch className="absolute top-0 left-0 mt-4 ml-4 text-xl font-bold  text-orange" />
    </div>
  );
};

export default MenuSearch;
