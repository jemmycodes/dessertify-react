import Hero from "./Components/Hero/Hero";
import Layout from "./Components/Layout/Layout";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Layout>
        <Hero />;
      </Layout>
    </>
  );
}

export default App;
