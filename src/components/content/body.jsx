import React from "react";
import FamilyPhotos from "./familyPhotos";
import HistorySection from "./historySection";
import TimelineSection from "./timelineSection";
import gsap from "gsap";
import FamilyTreeSection from "./familyTreeSection";

const Body = () => {
  const doIntersectionAnimation = (
    intersection,
    options,
    sectionIds,
    isImages
  ) => {
    const fadeIn = (element, coords) => {
      gsap.to(element, 0.4, {
        ...coords,
        opacity: 1,
        ease: "power4.in",
      });
    };

    const fadeOut = (element, coords) => {
      gsap.to(element, 0.3, {
        ...coords,
        opacity: 0,
        ease: "power4.in",
      });
    };

    const { title, line, text } = sectionIds;

    if (isImages) {
      // for images section
      // title.title = img section id in this case.

      if (intersection && intersection.intersectionRatio < options.threshold) {
        fadeOut(title.title, title.coords1);
      } else {
        fadeIn(title.title, { x: 0, y: 0 });
      }
    } else {
      // other
      if (intersection && intersection.intersectionRatio < options.threshold) {
        if (window.innerWidth <= 770) {
          fadeOut(title.title, title.coords1);
          fadeOut(line.line, line.coords1);
          fadeOut(text.text, text.coords1);
        } else {
          fadeOut(title.title, title.coords2);
          fadeOut(line.line, line.coords2);
          fadeOut(text.text, text.coords2);
        }
      } else {
        fadeIn(title.title, { x: 0, y: 0 });
        fadeIn(line.line, { x: 0, y: 0 });
        fadeIn(text.text, { x: 0, y: 0 });
      }
    }
  };

  return (
    <main>
      <HistorySection doIntersectionAnimation={doIntersectionAnimation} />
      <FamilyPhotos doIntersectionAnimation={doIntersectionAnimation} />
      <TimelineSection doIntersectionAnimation={doIntersectionAnimation} />
      <FamilyTreeSection doIntersectionAnimation={doIntersectionAnimation} />
    </main>
  );
};

export default Body;
