import React from "react";

function About() {
  return (
    <div className="mx-auto items-center flex md:flex-row flex-col md:text-left md:mt-0 mt-6 text-center my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        <img src="/myPicture.png" className="" />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <div className="font-extralight xl:inline">About myself</div>
        </h1>

        <p className="py-5 font-light	text-lightViolet">
          I am a Software Developer at Ethnus R&D
          <br />
          <br /> My career goal is to solve problems by building scalable and
          performant software solutions <br />
          <br />
          During my off-hours I sharpen my intellect and skills by building
          projects
          <br />
          Apart from being a Software Engineer, I am also an AI researcher
          <br />
          <br />
          My hobbies are reading books and Listening to music <br />
        </p>
      </div>
    </div>
  );
}

export default About;

//https://codemyui.com/slide-in-and-out-timeline-animation/

//https://visme.co/blog/website-color-schemes/
