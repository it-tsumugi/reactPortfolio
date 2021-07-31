import { VFC } from "react";
import styled from "styled-components";
import media from "../../../assets/styles/media";

import { profileItems } from "../../../assets/data/profileItems";
import { ProfileDetailButtonInput } from "../../atoms/profile/ProfileDetailButtonInput";
import { ProfileHiddenDetail } from "../../molecules/profile/profileHiddenDetail";
import { ProfileText } from "../../molecules/profile/ProfileText";

export const ProfileContents: VFC = () => {
  return (
    <SComponentContainer>
      {profileItems.map((item) => {
        return (
          <SProfileItemContainer key={item.type}>
            <SProfileItemLineContainer>
              <ProfileText type={item.type} text={item.text} />
              <SUnderLine />
              <ProfileHiddenDetail
                type={item.type}
                detailText={item.detailText}
              />
            </SProfileItemLineContainer>
            <ProfileDetailButtonInput
              isDetail={item.isDetail}
              type={item.type}
            />
          </SProfileItemContainer>
        );
      })}
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
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
