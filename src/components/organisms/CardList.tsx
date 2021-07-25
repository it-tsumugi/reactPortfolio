import { VFC } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

import { cardListType } from "../../Type";

export const CardList: VFC<cardListType> = (props) => {
  const { cardList, isSkillLevel, isUsedTech } = props;
  return (
    <SGridContainer container spacing={2}>
      {cardList.map((card) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <SCard>
              <img height={160} width={160} src={card.img} alt={"React"} />
              <STitle>{card.title}</STitle>
              {isSkillLevel ? (
                <SRatingContents>
                  <h4 style={{ paddingTop: 0 }}>熟練度</h4>
                  <Rating value={card.rate} readOnly />
                </SRatingContents>
              ) : null}
              <p style={{ textAlign: "left" }}>{card.text}</p>
              {isUsedTech
                ? card.usedTechImg.map((img) => (
                    <img
                      height={50}
                      width={50}
                      src={img}
                      alt={"React"}
                      style={{ float: "left" }}
                    />
                  ))
                : null}
            </SCard>
          </Grid>
        );
      })}
    </SGridContainer>
  );
};

const SGridContainer = styled(Grid)`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  padding: 50px 0 50px;
`;

const SCard = styled(Card)`
  padding: 10px;
  border: solid 5px white;
  border-radius: 10px;
  background-color: #294286;
  color: #f0f0f0;
  height: 400px;
`;

const STitle = styled.h2`
  border-bottom: solid 3px white;
`;

const SRatingContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13px;
`;
