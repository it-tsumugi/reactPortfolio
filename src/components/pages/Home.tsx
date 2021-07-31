import { VFC } from "react";
import styled from "styled-components";
import media from "../../assets/styles/media";

import { ProfileImage } from "../atoms/image/ProfileImage";

export const Home: VFC = () => {
  return (
    <SComponentContainer>
      <ProfileImage />
      <SMessage>
        <div>Thank You For Visiting</div>
        <div>Tsumugi's Portofolio</div>
      </SMessage>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  text-align: center;
  margin: auto;
`;

const SMessage = styled.h1`
  margin: 10px auto;

  font-size: 64px;
  ${media.lg`
  font-size: 36px;
  `}
  ${media.md`
  font-size: 26px;
  `}
`;
