import Image from "./Image";
import desserts from "../../assets/food-images/desserts.avif";
import burger from "../../assets/food-images/burger.avif";
import chocolates from "../../assets/food-images/chocolates.avif";
import drinks from "../../assets/food-images/drinks.avif";

function HeroCard() {
  return (
    <section className="hero-card-overlay-section">
      <div className="hero-section__glass-card">
        <Image
          src={burger}
          alt="Gramercy Tavern"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />

        <h3>Gramercy Tavern</h3>
        <h3>
          <span>$</span>32.99
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={desserts}
          alt="Killer Brownie"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3>Killer Brownie</h3>
        <h3>
          <span>$</span>12.99
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={chocolates}
          alt="Jacques Torres Chocolate"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3>Jacques Torres</h3>
        <h3>
          <span>$</span>19.00
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={drinks}
          alt="Guy Fieri"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3>Guy Fieri Drink</h3>
        <h3>
          <span>$</span>69.00
        </h3>
      </div>
    </section>
  );
}

export default HeroCard;
