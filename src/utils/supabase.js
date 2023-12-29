import toast from "react-hot-toast";
import { supabase } from "../../supabaseClient";
import useAuth from "../state/useAuth";

export const signUpWithEmail = async (fields, toastID) => {
  let response;

  const { data, error } = await supabase.auth.signUp({
    email: fields.email,
    password: fields.password,
    options: {
      data: {
        firstname: fields.firstname,
        lastname: fields.lastname,
        houseAddress: fields.houseAddress,
      },
    },
  });

  if (error?.status === 0) {
    toast.error("Please check your internet connection!", { id: toastID });
    response = {
      data: null,
      error: error.message,
    };

    return response;
  }

  if (error) {
    toast.error("Something went wrong, please try again!", { id: toastID });
    response = {
      data: null,
      error: error.message,
    };

    return response;
  }

  toast.dismiss(toastID);
  response = {
    data: data,
    error: null,
  };

  console.log(response);
  return response;
};

export const signInWithEmail = async (fields, toastID) => {
  const { data, error } = await supabase.auth.signInWithPassword(fields);

  let response;

  if (error?.status === 400) {
    response = {
      data: null,
      error: error.message,
    };
    toast.error("Email or Password is incorrect!", { id: toastID });
    return response;
  }

  if (error) {
    response = {
      data: null,
      error: error.message,
    };
    toast.error("Something went wrong, please try again!", { id: toastID });
    return response;
  }

  toast.dismiss(toastID);

  response = {
    data: data,
    error: null,
  };

  return response;
};

export const signInWithGoogle = async () => {
  console.log("signing in with google");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://dessertify.vercel.app/menu",
    },
  });

  if (error) {
    console.log(error.message, error.code);
    return error;
  }

  return { data, error };
};

export const signUserOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.error("Something went wrong, please try again!");
    return;
  }

  useAuth.getState().clearSession();
};
