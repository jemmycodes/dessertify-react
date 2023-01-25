import Hero from "../Components/Hero/Hero";
import Showcase from "../Components/Showcase/Showcase";

function Home() {
  const menuData = JSON.parse(localStorage.getItem("menu"));
  console.log(menuData);

  const data = menuData.splice(-20);

  return (
    <>
      <Hero />
      <Showcase data={data} />
    </>
  );
}

export default Home;
