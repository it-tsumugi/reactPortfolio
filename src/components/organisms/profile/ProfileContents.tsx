import { VFC } from "react";
import styled from "styled-components";
import { profileItems } from "../../../assets/data/profileItems";
import media from "../../../assets/styles/media";
import { ProfileDetailButtonInput } from "../../atoms/profile/ProfileDetailButtonInput";
import { ProfileHiddenDetail } from "../../molecules/profile/profileHiddenDetail";
import { ProfileText } from "../../molecules/profile/ProfileText";

export const ProfileContents: VFC = () => {
  return (
    <SProfileItemsContainer>
      {profileItems.map((item) => {
        return (
          <SProfileItemContainer key={item.id}>
            <SProfileItemLineContainer>
              <ProfileText type={item.type} text={item.text} />
              <SUnderLine />
              <ProfileHiddenDetail id={item.id} detailText={item.detailText} />
            </SProfileItemLineContainer>
            <ProfileDetailButtonInput isDetail={item.isDetail} id={item.id} />
          </SProfileItemContainer>
        );
      })}
    </SProfileItemsContainer>
  );
};

const SProfileItemsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const SProfileItemContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SProfileItemLineContainer = styled.div`
  width: 95%;
  min-width: 95%;
  ${media.md`
  width: 89%;
  min-width: 89%;
  `}
`;

const SUnderLine = styled.div`
  border-bottom: 2px solid #fff;
  width: 100%;
  box-sizing: border-box;
`;
