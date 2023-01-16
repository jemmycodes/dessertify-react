import Image from "next/image";
import heroBg from "../../public/hero-bg.png";

function Hero() {
  return (
    <section className="hero-section">
      <div>
        <p>
          The Safest Online Food Ordering Service in
          <span className="text-orange"> Nigeria</span>
        </p>
        <p>
          The leading online Food Service enterprise that ensures you get your
          desired food/snacks to satisfy your taste buds! No matter where you
          may be in Africa, from the East of Africa, Kenya, to the West,
          Nigeria, Ghana to the South African part and also to the Farther North
          of Africa, we've got you covered!
        </p>
        <div>
          <button>Order now</button>
        </div>
      </div>
      <div>
        <Image
          src={heroBg}
          placeholder="blur"
          className="hero-img-bg"
          width="350"
          height="200"
        />
      </div>
    </section>
  );
}

export default Hero;
