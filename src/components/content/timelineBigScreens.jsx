import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useTranslation } from "react-i18next";

const TimelineBigScreens = ({ styling }) => {
  const { t } = useTranslation();

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent style={{ ...styling }} color="text.secondary">
          January 1 1980
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
          <TimelineConnector sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent style={{ ...styling }}>
          <b>{t("event1")}: </b> Lorem, ipsum dolor sit amet consectetur,
          adipisicing elit. Necessitatibus, architecto.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={{ ...styling }} color="text.secondary">
          August 5 1997
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
          <TimelineConnector sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent style={{ ...styling }}>
          <b>{t("event2")}:</b> Nostrum dolores ducimus exercitationem
          quibusdam. Tempora eaque odio voluptate eum totam minima.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={{ ...styling }} color="text.secondary">
          April 10 2005
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
          <TimelineConnector sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent style={{ ...styling }}>
          <b>{t("event3")}: </b>Aut a placeat eum! Cupiditate, optio?
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={{ ...styling }} color="text.secondary">
          July 14 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
          <TimelineConnector sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent style={{ ...styling }}>
          <b>{t("event4")}: </b>Quisquam excepturi accusantium modi fugit nam
          est.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineBigScreens;
