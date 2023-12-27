import { create } from "zustand";
import { getUserSession } from "../utils/supabase";

const useAuth = create((set) => ({
  user: null,
  loading: true,
  getSession: async () => {
    const user = await getUserSession();


    set({ user: user, loading: false });
    console.log(user);
  },
}));

export default useAuth;
