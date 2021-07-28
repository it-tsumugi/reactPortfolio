import { VFC } from "react";
import styled from "styled-components";

type PropsType = {
  titleTechImg: string | undefined;
  isUsedTech: boolean;
  usedTechImg: string[];
};

export const CardTech: VFC<PropsType> = (props) => {
  const { titleTechImg, isUsedTech, usedTechImg } = props;
  return (
    <SContainer>
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
    </SContainer>
  );
};

const STechText = styled.div`
  text-align: left;
  text-decoration: underline;
  padding-bottom: 5px;
`;

const STechImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 15px;
`;
