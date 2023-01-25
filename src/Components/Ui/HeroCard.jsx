import Image from "./Image";
import drink from "../../assets/d5.png";
import fruit1 from "../../assets/f1.png";
import fruit2 from "../../assets/f9.png";
import icecream from "../../assets/i7.png";

function HeroCard() {
  return (
    <section className="hero-card-overlay-section">
      <div className="hero-section__glass-card">
        <Image
          src={drink}
          alt="Gramercy Tavern"
          width={130}
          height={130}
          className="hero-glass-effect__img  max-w-[3rem] translate-x-6"
        />

        <h3>Sprite</h3>
        <h3>
          <span>₦</span>800
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={fruit1}
          alt="Killer Brownie"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3>Strawberry</h3>
        <h3>
          <span>₦</span>1200
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={fruit2}
          alt="Jacques Torres Chocolate"
          width={130}
          height={130}
          className="hero-glass-effect__img"
        />
        <h3>Bananas</h3>
        <h3>
          <span>₦</span>1200
        </h3>
      </div>
      <div className="hero-section__glass-card">
        <Image
          src={icecream}
          alt="Guy Fieri"
          width={130}
          height={130}
          className="hero-glass-effect__img max-w-[3rem] translate-x-6"
        />
        <h3>Ice Cream</h3>
        <h3>
          <span>₦</span>1700
        </h3>
      </div>
    </section>
  );
}

export default HeroCard;
