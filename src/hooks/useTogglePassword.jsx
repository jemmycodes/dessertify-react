import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";

const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const classname = 'absolute right-4 top-1/2 text-lg'

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const response = showPassword
    ? { icon: <BiHide onClick={handleShowPassword} className={classname}/>, type: "password" }
    : { icon: <BiShowAlt onClick={handleShowPassword} className={classname} />, type: "text" };

  return response;
};

export default useTogglePassword;
