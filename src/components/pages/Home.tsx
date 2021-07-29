import { VFC } from "react";
import styled from "styled-components";
import media from "../../assets/styles/media";
import { ProfileImage } from "../atoms/image/ProfileImage";

export const Home: VFC = () => {
  return (
    <SContainer>
      <ProfileImage />
      <Smessage>
        <div>Thank You For Visiting</div>
        <div>Tsumugi's Portofolio</div>
      </Smessage>
    </SContainer>
  );
};

const Smessage = styled.h1`
  font-size: 64px;
  margin: 10px auto;

  ${media.lg`
  font-size: 36px;
  `}

  ${media.md`
  font-size: 26px;
  `}
`;

const SContainer = styled.div`
  text-align: center;
  margin: auto;
`;
