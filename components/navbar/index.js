import React from "react";

function Navbar() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: "2" }}>
      <div className="absolute top-0 h-full w-full  bg-darkViolet"></div>
      <nav className="h-12 w-full sticky">
        <ul className="list-none flex justify-evenly	">
          <li>
            <i
              onMouseEnter={(e) => {
                e.target.classList.remove("text-white");
                e.target.classList.add("text-darkGray");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("text-darkGray");
                e.target.classList.add("text-white");
              }}
              className="fas fa-home relative top-2/4 text-white cursor-pointer hover:text-blue-500"
            ></i>
          </li>
          <li>
            <i
              onMouseEnter={(e) => {
                e.target.classList.remove("text-white");
                e.target.classList.add("text-darkGray");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("text-darkGray");
                e.target.classList.add("text-white");
              }}
              className="fas fa-briefcase relative top-2/4 text-white cursor-pointer	hover:text-blue-500"
            ></i>
          </li>
          <li>
            <i
              onMouseEnter={(e) => {
                e.target.classList.remove("text-white");
                e.target.classList.add("text-darkGray");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("text-darkGray");
                e.target.classList.add("text-white");
              }}
              className="fas fa-language relative top-2/4 text-white cursor-pointer hover:text-blue-500"
            ></i>
          </li>
          <li>
            <i
              onMouseEnter={(e) => {
                e.target.classList.remove("text-white");
                e.target.classList.add("text-darkGray");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("text-darkGray");
                e.target.classList.add("text-white");
              }}
              className="fas fa-tools relative top-2/4	text-white cursor-pointer	hover:text-blue-500"
            ></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
