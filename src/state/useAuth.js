import { create } from "zustand";
import toast from "react-hot-toast";
import { supabase } from "../../supabaseClient";

const useAuth = create((set) => ({
  user: null,
  loading: true,
  getSession: () =>
    set(async (state) => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        toast.error("An error occurred");
        return;
      }

      console.log(session, error);

      console.log(state);
      return { user: "hi", loading: false };
    }),
}));

export default useAuth;
