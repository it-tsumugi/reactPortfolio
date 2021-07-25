import { cardItemsType } from "../Type";
import {
  reactImg,
  tsImg,
  styledComponentsImg,
  materialUiImg,
} from "../assets/images/technic/techImages";

export const productItems: cardItemsType[] = [
  {
    id: 1,
    title: "ポートフォリオサイト（このサイト）",
    text: "ReactやTypeScriptの勉強も兼ねて作成しました。",
    img: reactImg,
    usedTechImg: [reactImg, tsImg, styledComponentsImg, materialUiImg],
  },
];
