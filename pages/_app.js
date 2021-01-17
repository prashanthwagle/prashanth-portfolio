import "../styles/globals.css";
import { Particles } from "../components";
import Head from "next/head";
import dynamic from "next/dynamic";
import "react-vertical-timeline-component/style.min.css";

function MyApp({ Component, pageProps }) {
  const ParticleBackground = dynamic(() => import("../components/particles"), {
    ssr: false,
  });
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />

        <title>Prashanth Wagle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticleBackground />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
