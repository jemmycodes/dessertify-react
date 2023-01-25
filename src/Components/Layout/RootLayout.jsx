import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
