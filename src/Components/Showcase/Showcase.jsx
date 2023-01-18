import { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import ErrorImage from "../Ui/ErrorImage";
import MenuCards from "../Ui/MenuCards";

function Showcase() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [menu, setMenu] = useState([]);

  const fetchBestFoods = async () => {
    const response = await fetch(
      "https://free-food-menus-api-production.up.railway.app/burgers"
    );
    if (!response.ok) {
      setIsLoading(false);
      setError(true);
      return;
    }

    const data = await response.json();
    console.log(data);
    setMenu(data);
  };

  useEffect(() => {
    try {
      fetchBestFoods();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
    <section className="my-3">
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
      <div className="bg-babyPinkBg flex justify-center p-2 rounded-md bt-2 gap-5 overflow-x-scroll">
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
