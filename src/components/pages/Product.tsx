import { VFC } from "react";

import { productItems } from "../../assets/data/productItems";
import { PageTitle } from "../atoms/PageTitle";
import { CardList } from "../organisms/CardList";

export const Product: VFC = () => {
  return (
    <>
      <PageTitle>PRODUCT</PageTitle>
      <CardList
        cardList={productItems}
        isSkillLevel={false}
        isUsedTech={true}
        isIcon={true}
        flexwrap="wrap-reverse"
        titleTechImg="使用した技術"
      />
    </>
  );
};
