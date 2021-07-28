export type cardItemsType = {
  id: number;
  title: string;
  text: string;
  img: string;
  name: string;
  width: number;
  height: number;
  url?: string;
  rate?: number;
  usedTechImg: string[];
};

export type cardListType = {
  cardList: cardItemsType[];
  isSkillLevel: boolean;
  isUsedTech: boolean;
  isIcon: boolean;
  titleTechImg?: "使用した技術" | "学習した技術";
  flexwrap: "wrap" | "wrap-reverse";
};

export type iconType = {
  url?: string;
};
