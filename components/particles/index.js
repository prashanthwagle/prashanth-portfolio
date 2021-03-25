import Particles from "react-particles-js";
import { useEffect, useState } from "react";
import config from "../../utils/particles.config.json";

function ParticleBackground() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          position: "fixed",
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover !important",
          height: "150%",
          width: "100%",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          zIndex: "-3",
        }}
      ></div>
      <Particles
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          zIndex: "-1",
        }}
        params={config}
      />
    </>
  );
}

export default ParticleBackground;
