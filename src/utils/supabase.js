import toast from "react-hot-toast";
import { supabase } from "../../supabaseClient";
import useAuth from "../state/useAuth";
import { useActionData } from "react-router-dom";
import { createUserProfile } from "./utils";
import { useState } from "react";

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

export const checkIfUserExists = async (userID) =>
  await supabase.from("users").select("*").eq("user_id", userID).single();

export const insertIntoDb = async (table, item) => {
  const { error } = await supabase.from(table).insert(item);
  return error;
};

export const signInWithEmail = async (fields) => {
  // 1. sign in with supabase and handle data and errors

  const { data, error } = await supabase.auth.signInWithPassword(fields);

  if (data?.session) {
    useAuth.setState({ session: data.session });
  }

  if (error?.status === 400) {
    toast.error("Email or Password is incorrect!");
    return error;
  }

  if (error) {
    toast.error("An error occurred!");
    return error;
  }

  const { firstname, lastname, avatar_url, houseAddress, email } =
    data.user.user_metadata;
  const user_id = data.user.id;

  const response = await createUserProfile(user_id, {
    firstname,
    lastname,
    avatar_url,
    houseAddress,
    email,
  });

  return error || response;
};

export const signInWithGoogle = async () => {
  toast.loading("Signing in with google");
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

  console.log(data, error);

  return { data, error };
};

export const signUserOut = async () => {
  const toastID = toast.loading("Logging you out");

  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.error("Something went wrong, please try again!");
    return;
  }

  useAuth.getState().clearSession();
  toast.dismiss(toastID);
};

export const selectData = async (table, filterName, filterValue) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", userID)
    .single();

  return { data, error };
};
