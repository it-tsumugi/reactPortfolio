import styled from "styled-components";
import { VFC } from "react";
import media from "../../../assets/styles/media";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { eventItems } from "../../../assets/data/eventItems";

export const ProfileTimeline: VFC = () => {
  return (
    <SComponentContainer>
      <h1>History</h1>
      <VerticalTimeline>
        {eventItems.map((value) => {
          return (
            <SVerticalTimelineElement
              key={value.title}
              contentStyle={{ background: "#fff", color: "#222" }}
              contentArrowStyle={{ borderRight: "10px solid  #fff" }}
              date={value.date}
              dateClassName={"timelineDate"}
              iconStyle={{
                background: "#193278",
              }}
            >
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </SVerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  margin: 300px 0 50px;
  ${media.lg`
  margin: 250px 0 45px;
  `}
  ${media.md`
  margin: 200px 0 40px;
  `}
`;

const SVerticalTimelineElement = styled(VerticalTimelineElement)`
  .timelineDate {
    font-weight: bold;
    color: white;
  }
`;
