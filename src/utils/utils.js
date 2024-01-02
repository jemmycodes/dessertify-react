import * as yup from "yup";
import toast from "react-hot-toast";
import { insertIntoDb, checkIfUserExists } from "./supabase";

export const checkIfItemExists = (id, array) =>
  array.findIndex((item) => item.id === id);

export const filterArray = (array, searchInput) =>
  searchInput
    ? array.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : array;

export const fetchData = async (url) => {
  let loading = true;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  } finally {
    loading = false;
  }
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

export const createUserProfile = async (user_id, fields) => {
  const userExists = await checkIfUserExists(user_id);


  if (!userExists.data && userExists.error?.code === "PGRST116") {
    console.log("calling");
    const insertError = await insertIntoDb("users", {...fields, user_id});
    console.log(insertError);
    if (insertError) {
      toast.error("An error occurred");
      return insertError;
    }
  } else if (!(userExists.error?.code === "PGRST116") && !userExists.data) {
    toast.error("An error occurred");
    return userExists.error;
  }
};
