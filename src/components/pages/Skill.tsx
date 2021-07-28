import { VFC } from "react";
import { skillItems } from "../../assets/data/skillItems";
import { CardList } from "../organisms/CardList";

export const Skill: VFC = () => {
  return (
    <CardList
      cardList={skillItems}
      isSkillLevel={true}
      isUsedTech={false}
      isIcon={false}
      flexwrap="wrap"
    />
  );
};
