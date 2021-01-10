import "../styles/globals.css";
import { Particles } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />

        <title>bitwise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
