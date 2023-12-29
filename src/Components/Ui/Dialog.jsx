import { signUserOut } from "../../utils/supabase";

const Dialog = ({ closeDialog }) => {
  return (
    <div
      className="flex justify-center items-center bg-black/70 fixed top-0 h-screen 
      w-full"
      onClick={closeDialog}>
      <div className="max-w-sm bg-white rounded-md p-8 flex justify-center items-center flex-col gap-2 m-5">
        <h3 className="font-bold text-2xl text-red-600">Warning!</h3>
        <p className="text-center">
          Are you sure you want to logout? You'll need to login to access your
          account again
        </p>
        <div className="flex gap-5 ">
          <button
            onClick={closeDialog}
            className="border border-red-600 text-red-600 py-2 px-4 rounded-md">
            Cancel
          </button>
          <button
            onClick={signUserOut}
            className="bg-red-600 text-white py-2 px-4 rounded-md">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialog;
