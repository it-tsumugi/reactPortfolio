import { VFC } from "react";

import { studyItems } from "../../assets/data/studyItems";
import { PageTitle } from "../atoms/PageTitle";
import { CardList } from "../organisms/CardList";

export const Study: VFC = () => {
  return (
    <>
      <PageTitle>STUDY</PageTitle>
      <CardList
        cardList={studyItems}
        isSkillLevel={false}
        isUsedTech={true}
        isIcon={true}
        flexwrap="wrap"
        titleTechImg="学習した技術"
      />
    </>
  );
};
