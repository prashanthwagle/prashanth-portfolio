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
  const skillRef = useRef(null);

  return !loading ? (
    <>
      <Navbar
        aboutRef={aboutRef}
        skillRef={skillRef}
        homeRef={homeRef}
        timelineRef={timelineRef}
      />
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
        <div id="about" ref={skillRef} />
        <Container fadeDir="left">
          <SkillShowcase />
        </Container>
      </main>
      <Footer />
    </>
  ) : (
    <>
      <div
        style={{ backgroundColor: "#5CDB94" }}
        class="w-full h-full fixed block top-0 left-0 opacity-75 z-50"
      >
        <div className="flex justify-center items-center h-full">
          <i class="fas fa-circle-notch fa-spin fa-5x"></i>
        </div>
      </div>
    </>
  );
}
