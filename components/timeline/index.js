import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: "#05396B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Jan 2021 - present"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<i class="fas fa-briefcase"></i>}
      >
        <h3>My Portfolio Website</h3>
        <p>
          A prerendered website to showcase my career and skills. Made with ❤️
        </p>
        <p>
          More details:{"   "}
          &nbsp;
          <a
            href="#"
            target="_blank"
            href="https://github.com/prashanthwagle/prashanth-portfolio"
          >
            <i class="fab fa-github"></i>
          </a>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="Nov 2020 - Dec 2020"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<i class="fas fa-tools"></i>}
      >
        <h3 className="vertical-timeline-element-title">Netflix React Clone</h3>
        <p>
          Cloned the netflix frontend where users can signup/login and view and
          watch series/films.
        </p>
        <p>
          More details:{"   "}
          &nbsp;
          <a
            href="#"
            target="_blank"
            href="https://github.com/prashanthwagle/netflix-react-clone/"
          >
            <i class="fab fa-github"></i>
          </a>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#05396B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="Dec 2020"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<i class="fas fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Published a Paper</h3>
        <p>
          Network Protecttion using Machine Learning with Springer as the
          platform
        </p>
        <p>
          Conference Link:{"   "}
          &nbsp;
          <a href="#" target="_blank" href="http://aide2020.in/">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="Sep 2020 - Present"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<i class="fas fa-tools"></i>}
      >
        <h3>First Job</h3>
        <p>
          Started my first job as a Software Engineer at R&D division of Ethnus
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="May 2020 - June 2020"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<i class="fas fa-tools"></i>}
      >
        <h3>teXelector</h3>
        <p>
          A lightweight javascript library which enables easy social media
          access via an ergonomic tooltip
        </p>
        <p>
          More details:{"   "}
          &nbsp;
          <a
            href="#"
            target="_blank"
            href="https://github.com/prashanthwagle/teXelector"
          >
            <i class="fab fa-github"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="#"
            target="_blank"
            href="https://www.npmjs.com/package/texelector"
          >
            <i class="fab fa-npm"></i>
          </a>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;