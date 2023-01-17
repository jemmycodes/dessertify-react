import heroBg from "../../assets/hero-bg.png";
import Image from "../Ui/Image";
import HeroCard from "../Ui/HeroCard";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text-section">
        <p>
          The Safest Online Food Ordering Service in
          <span className="text-orange"> Nigeria</span>
        </p>
        <p>
          The leading online Food Service enterprise that ensures you get your
          desired food, drinks or snacks to satisfy your taste buds! No matter
          where you may be in Africa, from the East of Africa, Kenya, to the
          West, Nigeria, Ghana to the South African part and also to the Farther
          North of Africa, we've got you covered!
        </p>
        <div>
          <button>Order now</button>
        </div>
      </div>
      {/* white-striped layout with orange background */}
      <div className="hero-card-section  relative">
        <HeroCard />
        <Image
          src={heroBg}
          alt="Orange card background with white stripes"
          className="hero-img-bg"
        />
      </div>
    </section>
  );
}

export default Hero;
