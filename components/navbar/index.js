import React, { useContext } from "react";

function Navbar({ homeRef, timelineRef, skillRef }) {
  const iconSet = ["aboutMe", "devStory", "mySkills"];

  return (
    <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
      <div className="absolute top-0 h-full w-full bg-darkViolet"></div>
      <nav className="h-12 w-full sticky">
        <ul className="list-none flex justify-evenly">
          {iconSet.map((item) => (
            <li key={`${item}`}>
              <div
                onClick={() => {
                  if (item === "aboutMe")
                    homeRef.current.scrollIntoView({ behavior: "smooth" });
                  if (item === "devStory")
                    timelineRef.current.scrollIntoView({ behavior: "smooth" });
                  if (item === "mySkills")
                    skillRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative top-2/4 text-white tranform cursor-pointer transform transition duration-500 hover:scale-125`}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
