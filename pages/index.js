import Hero from "@/components/Hero/Hero";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Jemmy Foods | Sastifying your taste buds</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
    </>
  );
}

export default HomePage;
