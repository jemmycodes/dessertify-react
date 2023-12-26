import { Toaster } from "react-hot-toast";
import Logo from "../Navigation/Logo";

const AuthLayout = ({ children, heading, subheading }) => {
  return (
    <main className="flex items-center justify-center w-full h-screen p-4 bg-red-400 bg-cover bg-auth-page">
      <Toaster position="top-center" />;
      <div className="max-w-md p-8 mx-auto overflow-y-scroll bg-white rounded-xl max-h-[80%] flex flex-col ">
        <Logo className="flex self-center mx-auto md:hidden" />
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
