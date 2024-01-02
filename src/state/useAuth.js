import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "../../supabaseClient";
import toast from "react-hot-toast";

const useAuth = create(
  persist(
    (set) => ({
      session: null,
      getSession: async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          toast.error("An error occurred!");
        }

        set({ session: data?.session ? data.session : null });
      },
      clearSession: () => {
        set({ session: null });
        window.location.replace("/login");
      },
    }),
    {
      name: "session",
      partialize: (state) => ({ session: state.session }),
    }
  )
);

export default useAuth;
