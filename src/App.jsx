import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Menu from "./Pages/Menu";
import Navigation from "./Components/Navigation/Navigation";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <Navigation />
      {/* Routes setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
