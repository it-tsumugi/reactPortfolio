import { VFC } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

import { cardListType } from "../../Type";

export const CardList: VFC<cardListType> = (props) => {
  const { cardList, isSkillLevel, isUsedTech, flexwrap, titleTechImg } = props;
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
              <STitle>{card.title}</STitle>
              {isSkillLevel ? (
                <SRatingContents>
                  <h4 style={{ paddingTop: 0 }}>熟練度</h4>
                  <Rating value={card.rate} readOnly />
                </SRatingContents>
              ) : null}
              <p style={{ textAlign: "left" }}>{card.text}</p>
              <SContainer>
                <STechText>{titleTechImg}</STechText>
                <STechImgContainer>
                  {isUsedTech
                    ? card.usedTechImg.map((img) => (
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

const STitle = styled.h2`
  border-bottom: solid 3px white;
  font-size: 20px;
`;

const SRatingContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13px;
`;

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
