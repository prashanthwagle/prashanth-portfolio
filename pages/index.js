import { createContext, createRef, useRef, useEffect, useState } from "react";
import About from "../components/about";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import { Container } from "../components";
import Timeline from "../components/timeline";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  return !loading ? (
    <>
      <Navbar aboutRef={aboutRef} homeRef={homeRef} />
      <div id="home" ref={homeRef} />
      <Container fadeDir="left">
        <Jumbotron />
      </Container>
      <div id="about" ref={aboutRef} />
      <Container fadeDir="right">
        <About />
      </Container>
      <Container fadeDir="right">
        <Timeline />
      </Container>
      <Footer />
    </>
  ) : (
    <h1>Loading</h1>
  );
}
