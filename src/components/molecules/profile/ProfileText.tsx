import { VFC } from "react";
import styled from "styled-components";
import media from "../../../assets/styles/media";

type PropsType = {
  type: string;
  text: string;
};

export const ProfileText: VFC<PropsType> = (props) => {
  const { type, text } = props;
  return (
    <SProfileItemOrganismContainer>
      <SType>{type}</SType>
      <p>{text}</p>
    </SProfileItemOrganismContainer>
  );
};

const SProfileItemOrganismContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 3px;

  font-size: 32px;
  max-height: 80px;
  ${media.lg`
  font-size: 20px;
  max-height: 70px;
  `}
  ${media.md`
  font-size: 14px;
  max-height: 120px;
  `}
`;

const SType = styled.div`
  font-weight: bold;

  min-width: 200px;
  ${media.lg`
  min-width: 150px;
  `}
  ${media.md`
  min-width: 100px;
  `}
`;
