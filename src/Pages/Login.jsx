import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import google from "../assets/google.webp";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthLayout, Input } from "../Components";
import { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../utils/supabase.js";
import toast from "react-hot-toast";
import { loginSchema } from "../utils/utils.js";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onsubmit = async (fields) => {
    setLoading(true);
    const toastID = toast.loading("Signing you in ...");

    const response = await signInWithEmail(fields, toastID);

    console.log(response);

    response?.session && navigate("/menu");

    setLoading(false);
  };

  return (
    <AuthLayout className="">
      <h1 className="text-2xl font-bold font-frank-ruhl">Welcome back!</h1>
      <h4 className="text-sm ">Sign in with your email address and password</h4>

      <form className="w-full my-8 space-y-4">
        <Input
          id="email"
          type="email"
          label="Email"
          errorMessage={errors.email?.message}
          register={register}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          errorMessage={errors.password?.message}
          register={register}
        />

        <p className="-mt-6 text-xs text-right underline text-orange">
          Forgot Password?
        </p>

        <button
          className="relative flex items-center justify-center w-full px-5 py-3 text-sm font-medium border rounded-full "
          onClick={async (e) => {
            e.preventDefault();
            const response = await signInWithGoogle();
          }}>
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
          onClick={handleSubmit(onsubmit)}
          className="w-full px-10 py-3 text-sm text-white rounded-full bg-orange disabled:bg-gray-400 disabled:text-white">
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>

      <p className="text-xs">
        Don't have an account?{" "}
        <Link to="/signup" className="font-medium underline text-orange">
          Create Account
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
