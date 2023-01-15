import Layout from "@/components/Layout/Layout";
import Navigation from "@/components/Navigation/Navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
