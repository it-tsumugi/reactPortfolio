import { VFC } from "react";
import { productItems } from "../../data/productItems";
import { CardList } from "../organisms/CardList";

export const Product: VFC = () => {
  return (
    <CardList
      cardList={productItems}
      isSkillLevel={false}
      isUsedTech={true}
      flexwrap="wrap-reverse"
      titleTechImg="使用した技術"
    />
  );
};
