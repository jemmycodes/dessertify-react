import heroBg from "../../assets/hero-bg.png";
import Image from "../Ui/Image";
import HeroCard from "../Ui/HeroCard";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text-section">
        <p>
          The Safest Online Desserts Ordering Service in
          <span className="text-orange"> Nigeria</span>
        </p>
        <p>
          The leading online Dessert Ordering service that ensures you get your
          desired food, drinks or snacks to satisfy your taste buds! No matter
          where you may be in Nigeria, from the East to the West, up North and
          down South, we've got you covered!
        </p>
        <div>
          <NavLink to="/menu" className="order-now-btn">
            Order now
          </NavLink>
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
