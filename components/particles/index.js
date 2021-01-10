import Particles from "react-particles-js";
import config from "../../utils/particles.config.json";
function ParticleBackground() {
  return (
    <Particles
      style={{
        backgroundColor: "#240b36",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        zIndex: "-1",
      }}
      params={config}
    />
  );
}

export default ParticleBackground;
