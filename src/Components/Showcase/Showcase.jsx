import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import ErrorImage from "../Ui/ErrorImage";
import MenuCards from "../Ui/MenuCards";

function Showcase() {
  const [isLoading, error, menu, fetchBestFoods] = useHttp(
    "https://free-food-menus-api-production.up.railway.app/burgers"
  );

  useEffect(() => {
    fetchBestFoods();
  }, []);

  const menuCard = menu.map((menu) => (
    <MenuCards
      key={menu.id}
      title={menu.name}
      src={menu.img}
      price={menu.price.toString()}
      description={menu.dsc}
    />
  ));

  return (
    <section className="py-3">
      <div className="flex justify-between items-center mb-3">
        <p className="text-3xl">Our Best Foods</p>
        <div className="flex gap-4">
          <span className="bg-orange text-white text-3xl rounded-md">
            <MdOutlineNavigateBefore />
          </span>
          <span className="bg-orange text-white text-3xl rounded-md">
            <MdOutlineNavigateNext />
          </span>
        </div>
      </div>
      <div className="our-best-foods-section">
        {error && <ErrorImage />}
        {isLoading && (
          <p className="font-bold text-center text-orange">
            Fetching best Foods...
          </p>
        )}
        {!isLoading && <>{menuCard}</>}
      </div>
    </section>
  );
}

export default Showcase;
