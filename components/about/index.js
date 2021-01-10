import React from "react";

function About() {
  return (
    <div className="mx-auto flex md:flex-row flex-col-reverse md:text-left md:mt-0 mt-6 text-center my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        <img src="/myPicture.png" className="rounded-full	" />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <div className="block xl:inline text-lightViolet">About myself</div>
        </h1>
        <p>I am a Software Developer working at Ethnus R&D</p>
      </div>
    </div>
  );
}

export default About;

//https://codemyui.com/slide-in-and-out-timeline-animation/

//https://visme.co/blog/website-color-schemes/
