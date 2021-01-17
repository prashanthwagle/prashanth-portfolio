import React from "react";
import Fade from "react-reveal/Fade";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.super = {};
  }

  render() {
    const { fadeDir, children, ...restProps } = this.props;

    let wrapperComponent = <div>{children}</div>;

    if (fadeDir === "left")
      wrapperComponent = (
        <div>
          <Fade left>{children}</Fade>
        </div>
      );
    else if (fadeDir === "right")
      wrapperComponent = (
        <div>
          <Fade right>{children}</Fade>
        </div>
      );

    return (
      <div className="container mx-auto mt-20 px-4" {...restProps}>
        {wrapperComponent}
      </div>
    );
  }
}

export default Container;

//Convert this to classComponent
