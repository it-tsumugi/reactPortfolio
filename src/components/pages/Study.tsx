import { studyItems } from "../../data/studyItems";
import { CardList } from "../organisms/CardList";

export const Study = () => {
  return (
    <CardList
      cardList={studyItems}
      isSkillLevel={false}
      isUsedTech={true}
      flexwrap="wrap-reverse"
      titleTechImg="学習した技術"
    />
  );
};
