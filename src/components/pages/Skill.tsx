import { VFC } from "react";
import { skillItems } from "../../data/skillItems";
import { CardList } from "../organisms/CardList";

export const Skill: VFC = () => {
  return (
    <CardList
      cardList={skillItems}
      isSkillLevel={true}
      isUsedTech={false}
      flexwrap="wrap"
    />
  );
};
