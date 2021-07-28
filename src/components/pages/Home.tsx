import { VFC } from "react";
import styled from "styled-components";
import { ProfileImage } from "../atoms/image/ProfileImage";

export const Home: VFC = () => {
  return (
    <SContainer>
      <ProfileImage />
      <Smessage>
        <div>Tsumugi's Portofolio</div>
      </Smessage>
    </SContainer>
  );
};

const Smessage = styled.h1`
  font-size: 64px;
  margin: 10px auto;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const SContainer = styled.div`
  margin: auto;
`;
