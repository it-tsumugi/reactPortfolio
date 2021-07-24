import styled from "styled-components";
import { VFC } from "react";

import { GitHubIcon } from "../Icon/GitHubIcon";
import { TwitterIcon } from "../Icon/TwitterIcon";
import { QiitaIcon } from "../Icon/QiitaIcon";

interface Props {
  fixed: boolean;
}

export const Footer: VFC<Props> = (props) => {
  const { fixed } = props;
  return (
    <SFooter fixed={fixed}>
      &copy; 2021 Tsumugi
      <GitHubIcon />
      <TwitterIcon />
      <QiitaIcon />
    </SFooter>
  );
};

const SFooter = styled.header<{ fixed: boolean }>`
  background-color: #193278;
  color: #fff;
  padding: 10px 0;
  bottom: 0;
  width: 100%;
  position: ${({ fixed }) => (fixed ? "fixed" : "false")};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
