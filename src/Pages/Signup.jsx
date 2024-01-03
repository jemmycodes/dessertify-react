import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import google from "../assets/google.webp";
import { signupSchema } from "../utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthLayout, Input, Modal } from "../Components";
import useTogglePassword from "../hooks/useTogglePassword";
import { signInWithGoogle, signUpWithEmail } from "../utils/supabase";

const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const password = useTogglePassword();
  const confirmPassword = useTogglePassword();

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (fields) => {
    const toastID = toast.loading("Creating account...");
    setLoading(true);
    console.log(fields);
    const data = await signUpWithEmail(fields);

    if (data?.user && !data?.session) {
      setShowModal(true);
      reset({
        firstname: "",
        lastname: "",
        email: "",
        houseAddress: "",
        password: "",
        confirmPassword: "",
      });
    }

    toast.dismiss(toastID);
    setLoading(false);
  };

  return (
    <AuthLayout heading="Welcome!" subheading="Create an account">
      <Modal
        mail={getValues("email")}
        showModal={showModal}
        handleModal={() => setShowModal(false)}
      />

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
        <button
          className="relative flex items-center justify-center w-full px-5 py-3 text-sm font-medium border rounded-full "
          type="button"
          onClick={signInWithGoogle}>
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
          className="w-full px-10 py-3 text-sm text-white rounded-full bg-orange disabled:bg-gray-400 disabled:text-white">
          {loading ? "Loading..." : "Signup"}
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
