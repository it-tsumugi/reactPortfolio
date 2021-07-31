import { VFC } from "react";
import styled from "styled-components";
import media from "../../../assets/styles/media";

type PropsType = {
  titleTechImg: string | undefined;
  isUsedTech: boolean;
  usedTechImg: string[];
};

export const CardTech: VFC<PropsType> = (props) => {
  const { titleTechImg, isUsedTech, usedTechImg } = props;
  return (
    <SComponentContainer>
      <STechText>{titleTechImg}</STechText>
      <STechImgContainer>
        {isUsedTech
          ? usedTechImg.map((img) => (
              <img
                height={50}
                width={50}
                src={img}
                alt={titleTechImg}
                style={{ float: "left" }}
                key={img}
              />
            ))
          : null}
      </STechImgContainer>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 15px;
`;

const STechText = styled.div`
  text-align: left;
  text-decoration: underline;
  padding-bottom: 5px;

  font-size: 16px;
  ${media.lg`
  font-size: 14px;
  `}
  ${media.md`
  font-size: 12px;
  `}
`;

const STechImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;
