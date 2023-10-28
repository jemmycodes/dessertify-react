import background from "../../assets/auth-bg.jpg";

const AuthLayout = ({ children}) => {
  return (
    <main className="flex w-full min-h-screen ">
      <div className="flex flex-col justify-center w-full max-w-sm px-8 py-4 mx-auto">{children}</div>
      <img
        src={background}
        alt="A picture showing foods"
        height=""
        width=""
        className="hidden object-cover w-full 
        h-screen md:flex"
      />
    </main>
  );
};

export default AuthLayout;
