import React from "react";
import TimelineSmallScreens from "./timelineSmallScreens";
import TimelineBigScreens from "./timelineBigScreens";

const TimelineSection = ({ doIntersectionAnimation }) => {
  const customStyling = { fontFamily: "inherit" };
  const screenWidth = window.innerWidth;

  return (
    <section className="timeline-section">
      <h1 id="timeline-title">Timeline</h1>
      <div className="ver-line" id="timeline-line"></div>
      {screenWidth < 450 ? (
        <TimelineSmallScreens styling={customStyling} />
      ) : (
        <TimelineBigScreens styling={customStyling} />
      )}
    </section>
  );
};

export default TimelineSection;
