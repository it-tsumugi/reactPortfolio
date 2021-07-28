import { VFC } from "react";
import styled from "styled-components";

import { ProfileImage } from "../atoms/image/ProfileImage";
import { profileItems } from "../../assets/data/profileItems";
import { ProfileTimeline } from "../molecules/profile/ProfileTimeline";

export const Profile: VFC = () => {
  return (
    <SProfileContainer>
      <ProfileImage />
      {profileItems.map((text) => {
        return (
          <SProfileItemContainer key={text.id}>
            <SElementContainer>
              <SType>{text.type}</SType>
              <SText>{text.text}</SText>
              {text.isDetail ? (
                <SLabel htmlFor={"detail" + text.id}>詳細</SLabel>
              ) : null}
            </SElementContainer>
            <SInput type="Checkbox" id={"detail" + text.id} />
            <SUnderLine />
            <SHiddenDetail className="HiddenDetail">
              {text.detailText}
            </SHiddenDetail>
          </SProfileItemContainer>
        );
      })}
      <ProfileTimeline />
      <SSNS>フッターにGitHub、Twitter、Qiitaのアカウントを載せています。</SSNS>
    </SProfileContainer>
  );
};

const SProfileContainer = styled.div`
  padding-top: 100px;
  height: 100%;
`;

const SProfileItemContainer = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  height: 100%;
`;

const SElementContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
  min-height: 70px;
  width: 100%;
  box-sizing: border-box;
`;

const SText = styled.div`
  font-size: 32px;
`;

const SType = styled.div`
  font-size: 32px;
  text-align: left;
  font-weight: bold;
  width: 200px;
`;

const SUnderLine = styled.div`
  border-bottom: 2px solid #fff;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  box-sizing: border-box;
`;

const SHiddenDetail = styled.div`
  height: 0;
  padding: 0 15px;
  overflow: hidden;
  opacity: 0;
  transition: 0.8s;
  text-align: left;
  font-size: 20px;
  width: 100%;
  border-radius: 5px 5px 5px 5px;
  border: solid 3px white;
  box-sizing: border-box;
`;

const SSNS = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const SInput = styled.input`
  display: none;
  &:checked ~ .HiddenDetail {
    height: auto;
    opacity: 1;
    padding: 15px;
    margin-top: 8px;
  }
`;

const SLabel = styled.label`
  font-size: 20px;
  font-weight: normal;
  background-color: #193278;
  color: #e0e0e0;
  cursor: pointer;
  padding: 15px;
  margin-left: auto;
  border: solid 2px black;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  min-width: 100px;
  box-sizing: border-box;
`;
