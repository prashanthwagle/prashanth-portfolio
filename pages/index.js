import Head from "next/head";
import Jumbotron from "../components/jumbotron";
import { Particles } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>bitwise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles />
      <div className="container mx-auto px-4">
        <Jumbotron className="mt-20" />
      </div>
    </div>
  );
}
