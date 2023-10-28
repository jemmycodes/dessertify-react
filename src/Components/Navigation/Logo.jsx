import React from "react";
import logo from "../../assets/logo.png";
import Image from "../Ui/Image";

function Logo({ className }) {
  return (
    <div className={className}>
      <Image
        src={logo}
        alt="Logo"
        className="max-w-[4rem] object-cover"
        width="150"
        height="150"
      />
    </div>
  );
}

export default Logo;
