import Navigation from "@/components/Navigation/Navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
