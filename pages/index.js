import About from "../components/about";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto mt-20 px-4">
        <Jumbotron />
      </div>
      <div className="container mx-auto mt-20 px-4">
        <About />
      </div>
      <Footer />
    </div>
  );
}
