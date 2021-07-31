import styled from "styled-components";
import { VFC } from "react";
import media from "../../../assets/styles/media";

import { GitHubIcon } from "../../atoms/icon/GitHubIcon";
import { TwitterIcon } from "../../atoms/icon/TwitterIcon";
import { QiitaIcon } from "../../atoms/icon/QiitaIcon";

export const Footer: VFC = () => {
  return (
    <SComponentContainer>
      &copy; 2021 Tsumugi
      <GitHubIcon url="https://github.com/it-tsumugi" />
      <TwitterIcon url="https://twitter.com/it_tsumugi" />
      <QiitaIcon url="https://qiita.com/it_tsumugi" />
    </SComponentContainer>
  );
};

const SComponentContainer = styled.footer`
  background-color: #193278;
  color: #fff;
  padding: 10px 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  //フッター固定用
  margin-top: auto;

  gap: 80px;
  height: 40px;
  ${media.lg`
  gap: 60px;
  height: 45px;
  `}
  ${media.md`
  gap: 40px;
  height: 50px;
  `}
`;
