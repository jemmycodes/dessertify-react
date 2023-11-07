import toast from "react-hot-toast";
import { supabase } from "../../supabaseClient";
import * as yup from "yup";

export const checkIfItemExists = (id, array) =>
  array.findIndex(item => item.id === id);

export const filterArray = (array, searchInput) =>
  searchInput
    ? array.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : array;

export const signUpWithEmail = async (fields, toastID) => {
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
    return;
  }

  if (error) {
    toast.error("Something went wrong, please try again!", { id: toastID });
    return;
  }

  toast.dismiss(toastID);
  return data;
};

export const signInWithEmail = async (fields, toastID) => {
  const { data, error } = await supabase.auth.signInWithPassword(fields);

  if (error?.status === 400) {
    toast.error("Email or Password is incorrect!", { id: toastID });
    return;
  }

  if (error) {
    toast.error("Something went wrong, please try again!", { id: toastID });
  }

  toast.dismiss(toastID);
  return data;
};

export const getUserSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    toast.error("Something went wrong, please try again!");
    return;
  }

  return data.session;
};

export const signupSchema = yup
  .object({
    firstname: yup.string().trim().required("First Name is required"),
    lastname: yup.string().trim().required("Last name is required"),
    email: yup
      .string()
      .trim()
      .email("Email address is not valid")
      .required("Email cannot be empty"),
    houseAddress: yup.string().trim().required("House Address cannot be empty"),
    password: yup
      .string()
      .trim()
      .min(8, "Password is too short")
      .required("Please enter a password"),
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Your passwords do not match")
      .required("Field cannot be empty"),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email cannot be empty"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  })
  .required();
