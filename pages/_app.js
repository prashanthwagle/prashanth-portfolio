import "../styles/globals.css";
import { Particles } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Particles />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
