import React from "react";

function Footer() {
  const footerNotes = [
    { text: "Design and Developed by Prashanth Wagle", position: "left" },
    { text: "Copyright © 2021", position: "center" },
    { text: "Social Media Links", position: "right" },
  ];
  return (
    <div
      className="flex justify-between mt-10 bg-gray-500 p-2"
      style={{ backgroundColor: "#4F46E5", color: "white" }}
    >
      {footerNotes.map((fragment) => (
        <div
          key={fragment.position}
          className={`text-${fragment.position} flex-1`}
        >
          {fragment.text}
        </div>
      ))}
    </div>
  );
}

export default Footer;
