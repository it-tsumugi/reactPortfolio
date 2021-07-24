import styled from "styled-components";
import { ProgileImage } from "../atoms/image/ProfileImage";

export const Home = () => {
  return (
    <SContainer>
      <ProgileImage />
      <Smessage>
        <div>Welcome to </div>
        <div>Tsumugi's Portofolio</div>
      </Smessage>
    </SContainer>
  );
};

const Smessage = styled.h1`
  font-size: 64px;
  margin: 10px auto;
`;

const SContainer = styled.div`
  margin: 10%;
`;
