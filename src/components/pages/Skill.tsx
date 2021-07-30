import { VFC } from "react";

import { skillItems } from "../../assets/data/skillItems";
import { PageTitle } from "../atoms/PageTitle";
import { CardList } from "../organisms/CardList";

export const Skill: VFC = () => {
  return (
    <>
      <PageTitle>Skill</PageTitle>
      <CardList
        cardList={skillItems}
        isSkillLevel={true}
        isUsedTech={false}
        isIcon={false}
        flexwrap="wrap"
      />
    </>
  );
};
