import styled from "styled-components";
import monsterBall from "../../../assets/images/monsterBall.jpg";

export const ProfileImage = () => {
  return (
    <>
      <SImg height={160} width={160} src={monsterBall} alt="プロフィール" />
    </>
  );
};

const SImg = styled.img`
  border-radius: 50%;
`;
