export type cardItemsType = {
  id: number;
  title: string;
  text: string;
  img: string;
  rate?: number;
  usedTechImg: string[];
};

export type cardListType = {
  cardList: cardItemsType[];
  isSkillLevel: boolean;
  isUsedTech: boolean;
};
