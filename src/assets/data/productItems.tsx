import { cardItemsType } from "../Type";
import {
  reactImg,
  tsImg,
  styledComponentsImg,
  materialUiImg,
} from "../images/technic/techImages";

export const productItems: cardItemsType[] = [
  {
    title: "ポートフォリオサイト",
    text: "ReactやTypeScriptの勉強も兼ねて作成しました。",
    img: reactImg,
    name: "ポートフォリオサイト",
    width: 160,
    height: 160,
    url: "https://it-tsumugi.github.io/reactPortfolio/",
    usedTechImg: [reactImg, tsImg, styledComponentsImg, materialUiImg],
  },
];
