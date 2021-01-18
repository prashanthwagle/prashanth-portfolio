import React, { useContext } from "react";

function Navbar({ aboutRef, homeRef, timelineRef, skillRef }) {
  const iconSet = ["fa-home", "fa-info-circle", "fa-tools", "fa-language"];

  return (
    <div style={{ position: "sticky", top: 0, zIndex: "100" }}>
      <div className="absolute top-0 h-full w-full bg-darkViolet"></div>
      <nav className="h-12 w-full sticky">
        <ul className="list-none flex justify-evenly">
          {iconSet.map((item) => (
            <li key={`${item}`}>
              <i
                onMouseEnter={(e) => {
                  e.target.classList.remove("text-white");
                  e.target.classList.add("text-darkGray");
                }}
                onMouseLeave={(e) => {
                  e.target.classList.remove("text-darkGray");
                  e.target.classList.add("text-white");
                }}
                onClick={() => {
                  if (item === "fa-home")
                    homeRef.current.scrollIntoView({ behavior: "smooth" });
                  if (item === "fa-info-circle")
                    aboutRef.current.scrollIntoView({ behavior: "smooth" });
                  if (item === "fa-tools")
                    timelineRef.current.scrollIntoView({ behavior: "smooth" });
                  if (item === "fa-language")
                    skillRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className={`fas ${item} relative top-2/4 text-white cursor-pointer hover:text-blue-500`}
              ></i>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
