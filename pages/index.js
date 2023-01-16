import { useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Jemmy Foods | Sastifying your taste buds</title>
      </Head>
      <Hero />
    </>
  );
}

export default HomePage;
