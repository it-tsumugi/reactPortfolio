import { productItems } from "../../data/productItems";
import { CardList } from "../organisms/CardList";

export const Product = () => {
  return (
    <CardList cardList={productItems} isSkillLevel={false} isUsedTech={true} />
  );
};
