import "../styles/globals.css";
import { Particles } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Particles />
    </div>
  );
}

export default MyApp;
