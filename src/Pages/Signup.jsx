import * as yup from "yup";
import google from "../assets/google.webp";
import Logo from "../Components/Navigation/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthLayout, Input, Modal } from "../Components";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpWithEmail, signupSchema } from "../functions/functions";
import { createPortal } from "react-dom";
import { useState } from "react";

const Signup = () => {
  const [showModal, setShowModal] = useState(true);
  let mail;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async fields => {
    console.log(fields);
    const { firstname, lastname, houseAddress, email, password } = fields;
    mail = email;
    const response = await signUpWithEmail(
      { firstname, lastname, houseAddress },
      { email, password }
    );
    console.log(response);
  };

  return (
    <AuthLayout>
      {showModal &&
        createPortal(
          <Modal handleModal={() => setShowModal(false)} mail="test@test.com" />,
          document.querySelector("#root")
        )}
      <Logo className="flex self-center md:hidden" />

      <h1 className="text-2xl font-bold font-frank-ruhl">Welcome!</h1>
      <h4 className="text-sm ">Create an account</h4>

      <form className="my-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <Input
            id="firstname"
            type="text"
            label="First Name"
            errorMessage={errors.firstname?.message}
            register={register}
          />

          <Input
            id="lastname"
            type="text"
            label="Last Name"
            register={register}
            errorMessage={errors.lastname?.message}
          />
        </div>

        <Input
          id="email"
          type="email"
          label="Email"
          register={register}
          errorMessage={errors.email?.message}
        />

        <Input
          id="houseAddress"
          type="text"
          label="House Address"
          register={register}
          errorMessage={errors.houseAddress?.message}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          register={register}
          errorMessage={errors.password?.message}
        />

        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          register={register}
          errorMessage={errors.confirmPassword?.message}
        />

        <p className="-mt-6 text-xs text-right underline text-orange">
          Forgot Password?
        </p>
        <button className=" px-5 w-full py-3 border flex justify-center items-center rounded-full font-medium text-sm relative">
          <img
            src={google}
            alt=""
            height="20"
            width="20"
            className="absolute left-5"
          />
          Continue with Google
        </button>
        <button
          type="submit"
          className="px-10 py-3 text-sm w-full rounded-full text-white bg-orange "
        >
          Sign up
        </button>
      </form>

      <p className="text-xs">
        Have an account?{" "}
        <Link to="/login" className="font-medium underline text-orange">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
