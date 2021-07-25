import { skillItems } from "../../data/skillItems";
import { CardList } from "../organisms/CardList";

export const Skill = () => {
  return (
    <CardList cardList={skillItems} isSkillLevel={true} isUsedTech={false} />
  );
};
