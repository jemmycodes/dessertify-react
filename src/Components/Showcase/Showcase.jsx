import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import MenuCards from "../Ui/MenuCards";

function Showcase({ data }) {
  const menuCard = data.map((menu, index) => (
    <MenuCards
      key={menu._id}
      id={menu._id}
      title={menu.name}
      src={menu.photoUrl}
      price={index === 0 ? 2 : index}
      category={menu.category}
    />
  ));

  return (
    <section className="py-3">
      <div className="flex justify-between items-center mb-3">
        <p className="text-3xl">Our Best Offers</p>
        <div className="md:flex gap-4 hidden">
          <span className="bg-orange text-white text-3xl rounded-md">
            <MdOutlineNavigateBefore />
          </span>
          <span className="bg-orange text-white text-3xl rounded-md">
            <MdOutlineNavigateNext />
          </span>
        </div>
      </div>
      <div className="our-best-foods-section w-full">{menuCard}</div>
    </section>
  );
}

export default Showcase;
