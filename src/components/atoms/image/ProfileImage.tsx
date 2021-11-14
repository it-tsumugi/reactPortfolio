import styled from "styled-components";
import media from "../../../assets/styles/media";

import tsumugi from "../../../assets/images/profileImage.png";

export const ProfileImage = () => {
  return <SImg src={tsumugi} alt="プロフィール画像" />;
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
