import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimelineSmallScreens = ({ styling }) => {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
          <TimelineConnector sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent>
          <b> January 1 1980: </b> Lorem, ipsum dolor sit amet consectetur,
          adipisicing elit. Necessitatibus, architecto.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
          <TimelineConnector sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent>
          <b>August 5 1997:</b> Nostrum dolores ducimus exercitationem
          quibusdam. Tempora eaque odio voluptate eum totam minima.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
          <TimelineConnector sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent>
          <b>April 10 2005:</b> Nostrum dolores ducimus exercitationem
          quibusdam. Tempora eaque odio voluptate eum totam minima.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "var(--pale-spring-bud)" }} />
        </TimelineSeparator>
        <TimelineContent>
          <b>July 14 2021:</b> Nostrum dolores ducimus exercitationem quibusdam.
          Tempora eaque odio voluptate eum totam minima.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineSmallScreens;
