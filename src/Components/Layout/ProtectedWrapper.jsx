// import { useEffect } from "react";
// import useAuth from "../../state/useAuth";
// import { useNavigate } from "react-router-dom";

// const ProtectedWrapper = ({ children }) => {
//   const navigate = useNavigate();

//   const { getSession, loading, user } = useAuth((state) => state);

//   useEffect(() => {
//     (async () => {
//       await getSession();
//     })();
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   if (!user) {
//     toast.error("You need to be logged in to access this page");

//     navigate("/login");
//   }

//   return <div>ProtectedWrapper</div>;
// };

// export default ProtectedWrapper;
