import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full gap-8 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-black">
        <p>Oooops!</p>
      </h1>
      <span>
        <p className="text-center">{error.statusText || error.message}</p>
      </span>
    </div>
  );
}

export default ErrorPage;
