import Layout from "../Layout/RootLayout";
import Image from "../Ui/Image";
import logo from "../../assets/logo.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__logo">
        <Image src={logo} alt="Enterprise Logo" className="w-16 md:w-56 " />
        <p className="logo-text">JemmyFoods</p>
      </span>
      <div className="md:flex mt-7 justify-between space-y-5">
        <p className="text-center text-sm  text-ashText">
          &copy; 2023 JemmyFoods. All Rights Reserved
        </p>
        <span>
          <AiFillGithub />
          <AiFillInstagram />
          <AiOutlineWhatsApp />
          <AiOutlineTwitter />
          <SiGmail />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
