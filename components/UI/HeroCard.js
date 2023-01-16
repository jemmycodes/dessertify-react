import Image from "next/image";
import desserts from "../../public/food-images/desserts.avif";
import burger from "../../public/food-images/burger.avif";
import chocolates from "../../public/food-images/chocolates.avif";
import drinks from "../../public/food-images/drinks.avif";

function HeroCard() {
  return (
    <section className="flex flex-wrap absolute gap-x-5 gap-y-16 mt-12 md:mt-7 md:px-30  md:max-w-[32rem] lg:max-w-sm lg:left-20 justify-center items-center ">
      {/* <div className="hero-section__glass-card">
        <Image
          src={desserts}
          alt="Killer Brownie"
          placeholder="blur"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3 className="pt-5 font-bold pb-3">Killer Brownie</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>29.00
        </h3>
      </div> */}
      <div className="hero-section__glass-card">
        <Image
          src={burger}
          alt="Gramercy Tavern"
          placeholder="blur"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />

        <h3 className="pt-8 font-bold pb-3">Gramercy Tavern</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>32.99
        </h3>
      </div>{" "}
      <div className="hero-section__glass-card">
        <Image
          src={desserts}
          alt="Killer Brownie"
          placeholder="blur"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3 className="pt-8 font-bold pb-3">Killer Brownie</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>12.99
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={chocolates}
          alt="Jacques Torres Chocolate"
          placeholder="blur"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3 className="pt-8 font-bold pb-3">Jacques Torres</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>19.00
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={drinks}
          alt="Guy Fieri"
          placeholder="blur"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3 className="pt-8 font-bold">Guy Fieri Drink</h3>
        <h3>
          <span className="text-red-600 font-bold">$</span>69.00
        </h3>
      </div>
    </section>
  );
}

export default HeroCard;
