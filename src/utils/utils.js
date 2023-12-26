import * as yup from "yup";

export const checkIfItemExists = (id, array) =>
  array.findIndex((item) => item.id === id);

export const filterArray = (array, searchInput) =>
  searchInput
    ? array.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : array;



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
