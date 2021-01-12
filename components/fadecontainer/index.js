import React from "react";
import Fade from "react-reveal/Fade";

function Container({ fadeDir, children, ...restProps }) {
  return (
    <div className="container mx-auto mt-20 px-4" {...restProps}>
      {fadeDir === "left" && <Fade left>{children}</Fade>}
      {fadeDir === "right" && <Fade right>{children}</Fade>}
    </div>
  );
}

export default Container;
