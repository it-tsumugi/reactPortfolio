import { VFC } from "react";
import styled from "styled-components";
import media from "../../assets/styles/media";
import { GitHubIcon } from "../atoms/icon/GitHubIcon";

import { ProfileImage } from "../atoms/image/ProfileImage";
import { PageTitle } from "../atoms/PageTitle";
import { ProfileTimeline } from "../molecules/profile/ProfileTimeline";
import { ProfileContents } from "../organisms/profile/ProfileContents";
import { TwitterIcon } from "../atoms/icon/TwitterIcon";
import { QiitaIcon } from "../atoms/icon/QiitaIcon";

export const Profile: VFC = () => {
  return (
    <SComponentContainer>
      <PageTitle>PROFILE</PageTitle>
      <SProfileContainer>
        <ProfileImage />
        <SIconArea>
          <GitHubIcon url="https://github.com/it-tsumugi" />
          <TwitterIcon url="https://twitter.com/notifications" />
          <QiitaIcon url="https://qiita.com/it_tsumugi" />
        </SIconArea>
        <ProfileContents />
        <ProfileTimeline />
        <SSNS>
          フッターにGitHub、Twitter、Qiitaのアカウントを載せています。
        </SSNS>
      </SProfileContainer>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  text-align: center;
`;

const SProfileContainer = styled.div`
  width: 85vw;
  margin: 0 auto;

  padding-top: 100px;
  ${media.lg`
  padding-top: 50px;
  `}
  ${media.md`
  padding-top: 30px;
  `}
`;

const SIconArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px;
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
