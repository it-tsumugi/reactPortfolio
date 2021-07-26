export type cardItemsType = {
  id: number;
  title: string;
  text: string;
  img: string;
  name: string;
  width: number;
  height: number;
  rate?: number;
  usedTechImg: string[];
};

export type cardListType = {
  cardList: cardItemsType[];
  isSkillLevel: boolean;
  isUsedTech: boolean;
  titleTechImg?: "使用した技術" | "学習した技術";
  flexwrap: "wrap" | "wrap-reverse";
};
