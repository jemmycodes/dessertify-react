import toast from "react-hot-toast";
import { Input } from "../Components";
import useAuth from "../state/useAuth";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import authbg from "../assets/auth-bg.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { checkIfUserExists, selectData } from "../utils/supabase";

const Profile = () => {
  const session = useAuth((state) => state.session);
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
      toast.error("You need to login to access the profile page");
    }
  }, [session]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", session.user.id)
        .single();
      setProfile(data);

      console.log(data) 
      
    })();
  }, []);

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="md:grid md:grid-cols-profile-layout bg-orange/10">
      <img
        src={authbg}
        alt=""
        className="w-full h-56 object-cover md:h-screen md:sticky md:top-0 "
      />
      <section className="flex flex-col justify-center items-center -mt-12 md:-mt-0 md:p-5">
        <figure className="relative">
          <img
            src="https://th.bing.com/th/id/R.317ac0b357caa7f386c7453defe1cfa1?rik=3iuiDPPVdBQ5bg&pid=ImgRaw&r=0"
            alt=""
            height="150"
            width="150"
            className="rounded-full "
          />
          <span className="bg-white cursor-pointer p-3 aspect-square rounded-full absolute top-28 right-0">
            <FaCamera className="text-xl text-gray-950" />
          </span>
          <figcaption className="font-medium text-xl text-center">
            <p>John Doe</p>
            <p className="text-sm text-gray-400 text-center">Lagos, Nigeria</p>
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
              // errorMessage={errors.firstname?.message}
              register={register}
            />
            <Input
              id="lastname"
              type="text"
              label="Last Name"
              // errorMessage={errors.firstname?.message}ss
              register={register}
            />
            <Input
              id="Address"
              type="text"
              label="Address"
              register={register}
              // errorMessage={errors.firstname?.message}ss
            />
            <Input
              id="Location"
              type="text"
              label="Location"
              register={register}
              // errorMessage={errors.firstname?.message}ss
            />
            <Input
              label="Phone Number"
              type="tel"
              id="Phone-number"
              register={register}
              // errorMessage={errors.firstname?.message}ss
            />
          </div>
          <button className="bg-orange px-6 py-2 rounded text-white  transition-all duration-300 hover:brightness-90">
            Save Changes
          </button>
        </form>
      </section>
    </div>
  );
};

export default Profile;
