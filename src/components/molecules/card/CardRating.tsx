import { VFC } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";

type PropsType = {
  isSkillLevel: Boolean;
  rate?: number;
};

export const CardRating: VFC<PropsType> = (props) => {
  const { isSkillLevel, rate } = props;
  return (
    <>
      {isSkillLevel ? (
        <SRatingContents>
          <h4 style={{ paddingTop: 0 }}>熟練度</h4>
          <Rating value={rate} readOnly />
        </SRatingContents>
      ) : null}
    </>
  );
};

const SRatingContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13px;
`;
