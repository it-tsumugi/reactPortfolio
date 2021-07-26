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
    title: "ポートフォリオサイト",
    text: "ReactやTypeScriptの勉強も兼ねて作成しました。",
    img: reactImg,
    name: "ポートフォリオサイト",
    width: 160,
    height: 160,
    usedTechImg: [reactImg, tsImg, styledComponentsImg, materialUiImg],
  },
];
