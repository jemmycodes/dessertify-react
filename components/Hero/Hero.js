import Image from "next/image";
import heroBg from "../../public/hero-bg.png";
import HeroCard from "../UI/HeroCard";

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
      <div className="hero-card-section">
        <HeroCard />
        <Image
          src={heroBg}
          alt="Orange card background wiht with stripes"
          placeholder="blur"
          className="hero-img-bg"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}

export default Hero;
