import { VFC } from "react";
import styled from "styled-components";

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
    <SGridContainer container spacing={2} flexwrap={flexwrap}>
      {cardList.map((card) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4} key={card.id}>
            <SCard key={card.id}>
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
    </SGridContainer>
  );
};

const SGridContainer = styled(Grid)<{ flexwrap: string }>`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  padding: 50px 0 50px;
  flex-wrap: ${({ flexwrap }) => flexwrap};
`;

const SCard = styled(Card)`
  padding: 15px;
  border: solid 4px white;
  border-radius: 10px;
  background-color: #294286;
  color: #f0f0f0;
  height: 500px;
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
`;
