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
        {fadeDir === "left" && (
          <Fade collapse when={true} left>
            {children}
          </Fade>
        )}
        {fadeDir === "right" && (
          <Fade collapse right>
            {children}
          </Fade>
        )}
        {!fadeDir && { children }}
      </div>
    );
  }
}

export default Container;

//Convert this to classComponent
