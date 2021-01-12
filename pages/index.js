import { createContext, createRef, useEffect, useState } from "react";
import About from "../components/about";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import { Container } from "../components";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const jumboRef = createRef(null);
  const aboutRef = createRef(null);

  useEffect(() => {
    console.log("Loadng");
    setLoading(false);
  }, []);

  return !loading ? (
    <>
      <Navbar jumboRef={jumboRef} aboutRef={aboutRef} />
      <Container fadeDir="left">
        <Jumbotron />
      </Container>
      <Container fadeDir="right">
        <About />
      </Container>
      <Footer />
    </>
  ) : (
    <h1>Loading</h1>
  );
}
