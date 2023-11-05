import { supabase } from "../../supabaseClient";
import * as yup from "yup"

export const checkIfItemExists = (id, array) =>
  array.findIndex(item => item.id === id);

export const filterArray = (array, searchInput) =>
  searchInput
    ? array.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : array;

export const signUpWithEmail = async (metadata, { email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata },
  });

  return { data, error };
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
