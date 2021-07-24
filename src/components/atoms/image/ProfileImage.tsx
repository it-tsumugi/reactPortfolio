import styled from "styled-components";
import monsterBall from "../../../assets/images/monsterBall.jpg";

const name = "つむぎ";
export const ProgileImage = () => {
  return (
    <>
      <SImg height={160} width={160} src={monsterBall} alt={name} />
      <SName>{name}</SName>
    </>
  );
};

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
