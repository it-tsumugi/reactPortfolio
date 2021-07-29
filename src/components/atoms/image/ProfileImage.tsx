import styled from "styled-components";
import monsterBall from "../../../assets/images/monsterBall.jpg";
import media from "../../../assets/styles/media";

export const ProfileImage = () => {
  return <SImg src={monsterBall} alt="プロフィール画像" />;
};

const SImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;

  max-width: 160px;
  ${media.lg`
  max-width: 120px;
  `}
  ${media.md`
  max-width: 90px;
  `}
`;
