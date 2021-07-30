import { VFC } from "react";
import styled from "styled-components";
import media from "../../assets/styles/media";

type PropsType = {
  children: String;
};

export const PageTitle: VFC<PropsType> = (props) => {
  const { children } = props;
  return <SPageTitle>{children}</SPageTitle>;
};

const SPageTitle = styled.h1`
  display: none;
  text-align: center;
  ${media.lg`
　display:block;
　font-size: 32px;
　margin-top: 50px;
　`}
  ${media.md`
　display:block;
　font-size: 24px;
　margin-top: 30px;
　`}
`;
