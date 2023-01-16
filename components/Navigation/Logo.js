import logo from "../../public/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="Logo"
        className="max-w-[3rem] object-cover"
        placeholder="blur"
      />
      <p className="font-bold text-xl">JemmyFoods</p>
    </div>
  );
}

export default Logo;
