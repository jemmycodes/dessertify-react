import Image from "next/image";
import desserts from "../../public/food-images/desserts.avif";
import burger from "../../public/food-images/burger.avif";
import chocolates from "../../public/food-images/chocolates.avif";
import drinks from "../../public/food-images/drinks.avif";

function HeroCard() {
  return (
    <section className="flex flex-wrap absolute gap-7 mt-12 md:mt-7  max-w-2xl justify-center items-center ">
      <div className="max-w-[11rem]  flex flex-col px-5 py-8 text-center rounded-2xl hero-section-glass-effect ">
        <Image
          src={desserts}
          alt="Killer Brownie"
          placeholder="blur"
          width={130}
          height={130}
          className="-mt-20 rounded-full"
        />
        <h3 className="pt-8 font-bold pb-3">Killer Brownie</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>29.00
        </h3>
      </div>
      <div className="max-w-[11rem]  flex flex-col  px-5 py-8  text-center rounded-2xl hero-section-glass-effect ">
        <Image
          src={burger}
          alt="Gramercy Tavern"
          placeholder="blur"
          width={130}
          height={130}
          className="-mt-20 rounded-full"
        />
        <h3 className="pt-8 font-bold pb-3">Gramercy Tavern</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>32.99
        </h3>
      </div>
      <div className="max-w-[11rem]  flex flex-col  px-5 py-8  text-center rounded-2xl  hero-section-glass-effect">
        <Image
          src={chocolates}
          alt="Jacques Torres Chocolate"
          placeholder="blur"
          width={130}
          height={130}
          className="-mt-20 rounded-full"
        />
        <h3 className="pt-8 font-bold pb-3">Jacques Torres Chocolate</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>19.00
        </h3>
      </div>
      <div className="max-w-[11rem]  flex flex-col  px-5 py-8 text-center rounded-2xl  hero-section-glass-effect">
        <Image
          src={drinks}
          alt="Guy Fieri"
          placeholder="blur"
          width={130}
          height={130}
          className="-mt-20 rounded-full"
        />
        <h3 className="pt-8 font-bold">Guy Fieri</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>69.00
        </h3>
      </div>
    </section>
  );
}

export default HeroCard;
