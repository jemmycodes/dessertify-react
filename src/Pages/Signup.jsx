import google from "../assets/google.webp";
import Logo from "../Components/Navigation/Logo";
import { Link } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { AuthLayout, Input, Modal } from "../Components";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpWithEmail, signupSchema } from "../utils/utils";
import { createPortal } from "react-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useTogglePassword from "../hooks/useTogglePassword";

const Signup = () => {
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(false)
const password = useTogglePassword()
const confirmPassword = useTogglePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async fields => {
    console.log("creating account...");

    try {
      setLoading(true)
      toast.loading('Creating account...')
      const { data, error } = await signUpWithEmail(fields);

      if (error?.status === 0) {
        toast.error("Network Error, please check your connection!");
        throw new Error(error.message);
      }
      
      // data.session ?? setShowModal(true )

      if (!data?.session) {
        setShowModal(true);
        console.log('hi')
      }

      console.log(data, error);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
      toast.dismiss()
    }
  };

  return (
    <AuthLayout>
      {showModal &&
        createPortal(
          <Modal
            handleModal={() => setShowModal(false)}
            mail="test@test.com"
          />,
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
          type={password.type}
          label="Password"
          register={register}
          errorMessage={errors.password?.message}
          icon={password.icon}
        />

        <Input
          id="confirmPassword"
          type={confirmPassword.type}
          label="Confirm Password"
          register={register}
          errorMessage={errors.confirmPassword?.message}
          icon={confirmPassword.icon}
        />

        <p className="-mt-6 text-xs text-right underline text-orange">
          Forgot Password?
        </p>
        <button  className=" px-5 w-full py-3 border flex justify-center items-center rounded-full font-medium text-sm relative ">
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
        disabled={loading}
          type="submit"
          className="px-10 py-3 text-sm w-full rounded-full text-white bg-orange disabled:bg-gray-400 disabled:text-white"
        >
          {loading ? 'Loading...' : 'Signup'}
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
