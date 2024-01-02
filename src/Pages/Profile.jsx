import toast from "react-hot-toast";
import { Input } from "../Components";
import useAuth from "../state/useAuth";
import { useForm } from "react-hook-form";
import { FaCamera, FaSadCry } from "react-icons/fa";
import authbg from "../assets/auth-bg.jpg";
import { useEffect, useState } from "react";
import { profileSchema } from "../utils/utils";
import { selectData, updateData } from "../utils/supabase";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingScreen from "../Components/Layout/LoadingScreen";

const Profile = () => {
  const session = useAuth((state) => state.session);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
      toast.error("You need to login to access the profile page");
    }
  }, [session]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await selectData(
        "users",
        "user_id",
        session.user.id
      );

      error && setError(true);

      data && setProfile(data);

      setLoading(false);
    })();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileSchema) });

  const onSubmit = async (fields) => {
    setLoading(true);
    const response = await updateData(
      "users",
      fields,
      "user_id",
      session.user.id
    );

    if (response) {
      setLoading(false);
      toast.error("Couldn't update profile, try again later");
      return;
    }

    console.log(response);
    setLoading(false);
    toast.success("Profile updated successfully");
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="w-full h-screen p-3  flex-col gap-3  bg-orange/10 flex justify-center items-center ">
        <p className="font-medium  text-center">
          An error occurred, try logging in again or refresh the page
        </p>

        <Link to="/login" className="bg-orange px-6 py-2  text-white rounded ">
          Login{" "}
        </Link>
      </div>
    );
  }

  return (
    profile && (
      <div className="md:grid md:grid-cols-profile-layout bg-orange/10">
        <img
          src={authbg}
          alt=""
          className="w-full h-56 object-cover md:h-screen md:sticky md:top-0 "
        />
        <section className="flex flex-col justify-center items-center -mt-12 md:-mt-0 md:p-5">
          <figure className="relative">
            <img
              src={profile?.avatar_url}
              alt=""
              height="150"
              width="150"
              className="rounded-full "
            />
            <span className="bg-white cursor-pointer p-3 aspect-square rounded-full absolute top-28 right-0">
              <FaCamera className="text-xl text-gray-950" />
            </span>
            <figcaption className="font-medium text-xl text-center">
              <p>
                {profile.firstname} {profile.lastname}
              </p>
              <p className="text-sm text-gray-400 text-center">
                {profile.location}
              </p>
            </figcaption>
          </figure>
          <form
            className="flex flex-col justify-center items-center mb-20"
            id="profile-form">
            <div className="flex max-w-xl flex-wrap items-center  justify-center gap-4 m-4">
              <Input
                id="firstname"
                type="text"
                label="First Name"
                value={profile?.firstname}
                errorMessage={errors.firstname?.message}
                register={register}
              />

              <Input
                id="lastname"
                type="text"
                label="Last Name"
                value={profile?.lastname}
                errorMessage={errors.lastname?.message}
                register={register}
              />
              <Input
                id="email"
                type="email"
                label="Email"
                value={profile?.email}
                readOnly={true}
                errorMessage={errors.email?.message}
                register={register}
              />
              <Input
                id="houseAddress"
                type="text"
                label="Address"
                register={register}
                value={profile?.houseAddress}
                errorMessage={errors.houseAddress?.message}
              />
              <Input
                id="location"
                type="text"
                label="Location"
                register={register}
                value={profile?.location}
                errorMessage={errors.location?.message}
              />
            </div>
            <button
              className="bg-orange px-6 py-2 rounded text-white  transition-all duration-300 hover:brightness-90"
              type="submit"
              onClick={handleSubmit(onSubmit)}>
              Save Changes
            </button>
          </form>
        </section>
      </div>
    )
  );
};

export default Profile;
