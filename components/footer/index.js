import React from "react";

function Footer() {
  const footerNotes = [
    {
      text: `Built with ❤️‍ with ${React.createElement(
        "div",
        "TEXT"
      )} and Tailwind
    `,
      position: "left",
    },
    { text: "Copyright © 2021", position: "center" },
    { text: "Social Media Links", position: "right" },
  ];
  return (
    <div
      style={{ zIndex: "3" }}
      className="flex md:flex-row flex-col justify-between mt-10 bg-darkViolet text-white p-2"
    >
      <div className={`md:text-left text-center flex-1 py-1 text-white`}>
        Built with ❤️‍ with{" "}
        <img
          className="inline"
          src="https://img.shields.io/badge/NextJS%20-black.svg?&style=for-the-badge&logo=NextJS&logoColor=white"
          style={{ transform: "scale(0.8)" }}
        />
        and
        <img
          className="inline"
          src="https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"
          style={{ transform: "scale(0.8 )" }}
        />
      </div>
      <div className={`text-center flex-1 py-1 text-white`}>
        Copyright © 2021
      </div>
      <div className={`md:text-right py-1 text-center  flex-1  text-white`}>
        <a
          href="https://www.linkedin.com/in/prashanth-p-wagle360/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in mx-2"></i>
        </a>
        <a href="https://github.com/prashanthwagle" target="_blank">
          <i className="fab fa-github mx-2"></i>
        </a>
        <a href="https://medium.com/@prashanthwagle360" target="_blank">
          <i className="fab fa-medium-m mx-2"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
