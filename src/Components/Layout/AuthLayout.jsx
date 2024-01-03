import { useEffect } from "react";
import Logo from "../Navigation/Logo";
import { Toaster } from "react-hot-toast";
import authbg from "../../assets/auth-bg.jpg"
import useAuth from "../../state/useAuth.js";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, heading, subheading }) => {
  // const navigate = useNavigate();

  // const session = useAuth((state) => state.session);

  // useEffect(() => {
  //   session && navigate("/menu");
  // }, [session]);

  return (
    <main className="flex items-center justify-center w-full h-screen p-4 bg-cover ">
      <img
        src={authbg}
        alt=""
        className="w-full h-screen fixed -z-20 object-cover"
      />
      <div className="w-screen bg-black/60 fixed -z-10 h-screen"></div>
      <Toaster position="top-center" />;
      <div className="max-w-md p-6 mx-auto overflow-y-scroll scrollbar-hide bg-white rounded-xl max-h-[80%] flex flex-col ">
        <Logo className="flex self-center mx-auto" />
        <h1 className="text-2xl font-bold text-center font-frank-ruhl">
          {heading}
        </h1>
        <h4 className="text-sm text-center ">{subheading}</h4>
        {children}
      </div>
    </main>
  );
};
export default AuthLayout;
