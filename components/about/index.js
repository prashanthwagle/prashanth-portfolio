import React from "react";

function About() {
  return (
    <div className="mx-auto items-center flex md:flex-row flex-col md:text-left md:mt-0 mt-6 text-center my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        <img src="/myPicture.png" className="" />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <div className="block xl:inline text-lightViolet">About myself</div>
        </h1>
        <p className="py-5 font-semibold">
          I am a Software Developer working at Ethnus R&D based in Bengaluru,
          India.
          <br />
          <br /> My career goal is to make peoples’ life easy by leveraging
          technology. <br />
          <br />
          <span className="font-extrabold	">
            “A question opens the mind, A statement closes the mind”
          </span>
          and{" "}
          <span className="font-extrabold">
            “If I cannot do great things, I can do small things in a great way”{" "}
          </span>
          are the two powerful quotes that I live by.
          <br />
          <br />
          Whenever I am free, I usually research on topics related to tech and
          write blogs on topics if I find them interesting. <br />
          <br />I have fun by playing video games 🤫, binging on Music or Movies
          🙃 or unleashing the foodie inside of me! 🥳. <br />
          <br />
          Apologize for the serious tone! I believe that I have good sense of
          humour! 🤭
        </p>
      </div>
    </div>
  );
}

export default About;

//https://codemyui.com/slide-in-and-out-timeline-animation/

//https://visme.co/blog/website-color-schemes/
