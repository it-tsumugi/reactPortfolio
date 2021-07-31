import { VFC } from "react";
import styled from "styled-components";
import media from "../../assets/styles/media";

export const Page404: VFC = () => {
  return (
    <SComponentContainer>
      <h2>404 File not found</h2>
      <p>ページが見つかりません</p>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  text-align: center;
  padding-top: 100px;

  font-size: 32px;
  ${media.lg`
  font-size: 24px;
  `}
  ${media.md`
  font-size: 16px;
  `}
`;
