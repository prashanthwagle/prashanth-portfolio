import { createContext, createRef, useRef, useEffect, useState } from "react";
import About from "../components/about";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";
import { Container, Particles, SkillShowcase } from "../components";
import Timeline from "../components/timeline";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const timelineRef = useRef(null);

  return !loading ? (
    <>
     
      <Navbar aboutRef={aboutRef} homeRef={homeRef} timelineRef={timelineRef} />
      <div id="home" ref={homeRef} />
      <main>
        <Container fadeDir="left">
          <Jumbotron />
        </Container>
        <div id="about" ref={aboutRef} />
        <Container fadeDir="left">
          <About />
        </Container>
        <div id="about" ref={timelineRef} />
        <Container fadeDir="left">
          <Timeline />
        </Container>
        <Container fadeDir="left">
          <SkillShowcase />
        </Container>
      </main>
      <Footer />
    </>
  ) : (
    <h1>Loading</h1>
  );
}
