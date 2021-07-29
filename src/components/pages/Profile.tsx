import { VFC } from "react";
import styled from "styled-components";
import media from "../../assets/styles/media";

import { ProfileImage } from "../atoms/image/ProfileImage";
import { ProfileTimeline } from "../molecules/profile/ProfileTimeline";
import { ProfileContents } from "../organisms/profile/ProfileContents";

export const Profile: VFC = () => {
  return (
    <SProfileContainer>
      <ProfileImage />
      <ProfileContents />
      <ProfileTimeline />
      <SSNS>フッターにGitHub、Twitter、Qiitaのアカウントを載せています。</SSNS>
    </SProfileContainer>
  );
};

const SProfileContainer = styled.div`
  text-align: center;
  width: 85vw;
  margin: 0 auto;

  padding-top: 100px;
  ${media.lg`
  padding-top: 80px;
  `}
  ${media.md`
  padding-top: 60px;
  `}
`;

const SSNS = styled.p`
  text-align: center;
  padding-bottom: 50px;

  font-size: 16px;
  ${media.lg`
  font-size: 14px;
  `}
  ${media.md`
  font-size: 12px;
  `}
`;
