import React from "react";

function Navbar() {
  return (
    <nav className="h-12 w-full sticky" style={{ backgroundColor: "##4F46E5" }}>
      <ul className="list-none flex justify-evenly	">
        <li>
          <i class="fas fa-home relative top-2/4 text-white cursor-pointer hover:text-blue-500"></i>
        </li>
        <li>
          <i class="fas fa-briefcase relative top-2/4 text-white cursor-pointer	hover:text-blue-500"></i>
        </li>
        <li>
          <i class="fas fa-language relative top-2/4 text-white cursor-pointer hover:text-blue-500"></i>
        </li>
        <li>
          <i class="fas fa-tools relative top-2/4	text-white cursor-pointer	hover:text-blue-500"></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
