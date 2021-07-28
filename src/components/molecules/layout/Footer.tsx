import styled from "styled-components";
import { VFC } from "react";

import { GitHubIcon } from "../../atoms/icon/GitHubIcon";
import { TwitterIcon } from "../../atoms/icon/TwitterIcon";
import { QiitaIcon } from "../../atoms/icon/QiitaIcon";

export const Footer: VFC = () => {
  return (
    <SFooter>
      &copy; 2021 Tsumugi
      <GitHubIcon url="https://github.com/it-tsumugi" />
      <TwitterIcon url="https://twitter.com/it_tsumugi" />
      <QiitaIcon url="https://qiita.com/it_tsumugi" />
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #193278;
  color: #fff;
  padding: 10px 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: auto;
`;
