import React from "react";
import Container from "../index";

function SkillShowcase() {
  return (
    <div>
      <h1 className="text-4xl tracking-tight flex justify-center align-items-center m-8 font-extrabold sm:text-5xl md:text-6xl">
        <div className="block xl:inline text-lightViolet">Skills</div>
      </h1>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "#212529",
            color: "white",
            padding: "10px",
          }}
        >
          <i className="fab fa-github mx-2" />
          <a href="https://github.com/prashanthwagle" target="_blank">
            Checkout my Github page for an overview of my skills
          </a>
        </button>
      </div>
    </div>
  );
}

export default SkillShowcase;
