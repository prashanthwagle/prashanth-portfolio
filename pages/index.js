import Head from "next/head";
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
        asperiores eos dicta recusandae veniam! Distinctio earum aut accusamus
        obcaecati id, vitae nisi officiis perferendis voluptatum autem fugit
        molestiae porro optio! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident accusamus ullam dicta debitis atque ab
        voluptatum, hic, asperiores vero sit rerum labore officia numquam.
        Repellendus ea atque est unde assumenda. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sapiente placeat nostrum, temporibus
        nesciunt, soluta error esse voluptatum accusamus assumenda ipsum
        asperiores dolores labore architecto facere quos praesentium, quae porro
        reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum voluptates odit, dicta beatae saepe aut exercitationem, itaque
        fugit repellat natus voluptatem inventore, a magnam voluptatibus
        reprehenderit quibusdam ut reiciendis id!
      </div>
    </div>
  );
}
