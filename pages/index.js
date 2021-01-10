import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Jumbotron className="mt-20" />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur
        doloremque commodi sit, debitis, obcaecati earum necessitatibus repellat
        impedit ipsum qui vel voluptates praesentium assumenda dolore dolorum
        tenetur eveniet eos? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Non nemo sed eius, suscipit labore distinctio consectetur quasi
        reiciendis nostrum architecto, enim autem quis blanditiis aliquam qui
        quas, ipsa hic eaque. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Asperiores harum voluptate tempore. Perspiciatis
        delectus quaerat provident, cum, error eum veniam eligendi ullam
        dignissimos cupiditate laborum tempore, itaque dolore tenetur explicabo!
      </div>
      <Footer />
    </div>
  );
}
