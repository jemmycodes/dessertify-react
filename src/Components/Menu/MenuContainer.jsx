import { useLoaderData, useParams } from "react-router-dom";
import MenuCards from "../Ui/MenuCards";

function MenuContainer() {
  const params = useParams();
  const data = useLoaderData();

  const loadCurrentPageData = data.filter(
    (eachData) => eachData.category === params.menutype
  );
  console.log(loadCurrentPageData);
  const menuCard = loadCurrentPageData.map((menu, index) => (
    <MenuCards
      key={menu._id}
      title={menu.name}
      src={menu.photoUrl}
      category={menu.category}
      price={index === 0 ? 2 : index}
    />
  ));

  return (
    <section className="flex mt-10 flex-wrap gap-10 justify-center items-center">
      {menuCard}
    </section>
  );
}

export async function loader() {
  const data = await JSON.parse(localStorage.getItem("menu"));
  return data;
}

export default MenuContainer;
