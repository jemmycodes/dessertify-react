import React from "react";
import logo from "../../assets/logo.png";
import Image from "../Ui/Image";

function Logo() {
  return (
    <div className="flex flex-col items-center hover-scale-effect">
      <Image
        src={logo}
        alt="Logo"
        className="max-w-[3rem] object-cover"
        width="100"
        height="100"
      />
      <p className="font-bold text-center">
        Jemmy <br />
        Foods
      </p>
    </div>
  );
}

export default Logo;
