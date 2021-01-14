import React from "react";
import Fade from "react-reveal/Fade";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.super = {};
  }

  render() {
    const { fadeDir, children, ...restProps } = this.props;
    return (
      <div className="container mx-auto mt-20 px-4" {...restProps}>
        {fadeDir === "left" && <Fade left>{children}</Fade>}
        {fadeDir === "right" && <Fade right>{children}</Fade>}
      </div>
    );
  }
}

export default Container;

//Convert this to classComponent
