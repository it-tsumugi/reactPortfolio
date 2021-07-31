import { VFC } from "react";
import styled from "styled-components";
import media from "../../assets/styles/media";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import { cardListType } from "../../assets/Type";
import { CardTitle } from "../molecules/card/CardTitle";
import { CardRating } from "../molecules/card/CardRating";
import { CardTech } from "../molecules/card/CardTech";

export const CardList: VFC<cardListType> = (props) => {
  const { cardList, isSkillLevel, isUsedTech, isIcon, flexwrap, titleTechImg } =
    props;
  return (
    <SGrid container spacing={2} flexwrap={flexwrap}>
      {cardList.map((card) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4} key={card.title}>
            <SCard key={card.title}>
              <img
                height={card.height}
                width={card.width}
                src={card.img}
                alt={card.name}
              />
              <CardTitle title={card.title} url={card.url} isIcon={isIcon} />
              <SUnderLine />
              <CardRating isSkillLevel={isSkillLevel} rate={card.rate} />
              <SCardText>{card.text}</SCardText>
              <CardTech
                titleTechImg={titleTechImg}
                isUsedTech={isUsedTech}
                usedTechImg={card.usedTechImg}
              />
            </SCard>
          </Grid>
        );
      })}
    </SGrid>
  );
};

const SGrid = styled(Grid)<{ flexwrap: string }>`
  margin: 0 auto;
  padding: 50px 0 50px;
  overflow: hidden;
  flex-wrap: ${({ flexwrap }) => flexwrap};

  width: 80vw;
  ${media.lessThanlg`
  width:98vw;
  `}
`;

const SCard = styled(Card)`
  text-align: center;
  padding: 15px;
  border: solid 4px white;
  border-radius: 10px;
  background-color: #294286;
  color: #f0f0f0;
  height: 500px;
  box-sizing: border-box;
  //カード要素の基準点用
  position: relative;
`;

const SUnderLine = styled.div`
  border-top: 3px solid #fff;
  padding-bottom: 10px;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

const SCardText = styled.p`
  text-align: left;
  margin-top: 10px;
  font-size: 16px;
  ${media.lg`
  font-size: 14px;
  `}
  ${media.md`
  font-size: 13px;
  `}
`;
