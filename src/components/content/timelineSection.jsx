import React from "react";
import TimelineSmallScreens from "./timelineSmallScreens";
import TimelineBigScreens from "./timelineBigScreens";
import { useTranslation } from "react-i18next";

const TimelineSection = ({ doIntersectionAnimation }) => {
  const customStyling = {
    fontFamily: "inherit",
  };

  const { t } = useTranslation();

  const screenWidth = window.innerWidth;

  return (
    <section className="timeline-section">
      <h1 id="timeline-title">{t("timeline-title")}</h1>
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
