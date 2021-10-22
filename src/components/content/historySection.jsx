import React, { useRef } from "react";
import { useIntersection } from "react-use";
import { useTranslation } from "react-i18next";

const HistorySection = ({ doIntersectionAnimation }) => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "-20px",
    threshold: 0.1,
  };

  const intersection = useIntersection(sectionRef, options);

  const sectionIds = {
    title: {
      title: "#history-title",
      coords1: { y: -60 },
      coords2: { x: -60 },
    },
    line: { line: "#history-line", coords1: { x: 60 }, coords2: { y: -60 } },
    text: { text: "#history-text", coords1: { y: 60 }, coords2: { x: 60 } },
  };

  doIntersectionAnimation(intersection, options, sectionIds, false);

  return (
    <section className="history-section" id="history-section" ref={sectionRef}>
      <h1 id="history-title">{t("history-title")}</h1>
      <div className="ver-line" id="history-line"></div>
      <div className="text" id="history-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sunt
        suscipit voluptate quo ullam vitae nobis fugiat omnis ipsum totam?Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Delectus, itaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque
        provident, dolore doloremque fugiat consectetur!
      </div>
    </section>
  );
};

export default HistorySection;
