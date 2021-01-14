import { createContext, createRef, useRef, useEffect, useState } from "react";
import About from "../components/about";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import { Container } from "../components";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const aboutRef = useRef(null);

  return !loading ? (
    <>
      <Navbar aboutRef={aboutRef} />

      <Container fadeDir="left">
        <Jumbotron />
      </Container>
      <div id="about" ref={aboutRef} />
      <Container fadeDir="right">
        <About />
      </Container>

      <Footer />
    </>
  ) : (
    <h1>Loading</h1>
  );
}
