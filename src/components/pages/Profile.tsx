import { useState, VFC } from "react";
import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { DetailButton } from "../atoms/button/DetailButton";
import { ProgileImage } from "../atoms/image/ProfileImage";
import { profileItems } from "../atoms/data/profileItems";
import { eventItems } from "../atoms/data/eventItems";

export const Profile: VFC = () => {
  const [num, setNum] = useState<number>(0);
  const openClose = (num: number, newNum: number) => {
    if (num === newNum) setNum(0);
    else setNum(newNum);
  };
  return (
    <SContentsWrapper>
      <ProgileImage />
      {profileItems.map((text) => {
        return (
          <SProfileContainer key={text.id}>
            <SOrganismContainer>
              <SMoleculesContainer>
                <STextContainer>
                  <SType>{text.type}</SType>
                  <SContent>{text.content}</SContent>
                </STextContainer>
                <SUnderLine />
              </SMoleculesContainer>
              <SHiddenContents>
                {num === text.id ? (
                  <SHiddenDetail>{text.detailText}</SHiddenDetail>
                ) : null}
              </SHiddenContents>
            </SOrganismContainer>
            <SDetail>
              {text.detail ? (
                <DetailButton onClick={openClose} num={num} newNum={text.id}>
                  詳細
                </DetailButton>
              ) : null}
            </SDetail>
          </SProfileContainer>
        );
      })}

      <STimeline>
        <h1>History</h1>
        <VerticalTimeline>
          {eventItems.map((value) => {
            return (
              <SVerticalTimelineElement
                key={value.id}
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
      </STimeline>
      <SSNS>フッターにGitHub、Twitter、Qiitaのアカウントを載せています。</SSNS>
    </SContentsWrapper>
  );
};

const SContentsWrapper = styled.div`
  padding-top: 100px;
`;

const SProfileContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

const SMoleculesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;
const STextContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;

const SType = styled.div`
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  width: 200px;
`;
const SContent = styled.div`
  font-size: 28px;
`;

const SUnderLine = styled.div`
  padding: 3px;
  border-bottom: 2px solid #fff;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

const SDetail = styled.div`
  margin-left: 5px;
`;

const SHiddenDetail = styled.div`
  text-align: left;
  font-size: 20px;
  border-radius: 5px 5px 5px 5px;
  border: solid 3px white;
  padding: 15px 0 15px 10px;
  margin-top: 8px;
  width: 98.7%;
  height: auto;
`;

const SOrganismContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

const SHiddenContents = styled.div``;

const SVerticalTimelineElement = styled(VerticalTimelineElement)`
  .timelineDate {
    font-weight: bold;
    color: white;
  }
`;

const STimeline = styled.div`
  margin: 300px 0 50px;
`;

const SSNS = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;
