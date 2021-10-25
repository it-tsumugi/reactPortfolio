import { cardItemsType } from "../Type";
import {
  reactImg,
  tsImg,
  styledComponentsImg,
  materialUiImg,
} from "../images/technic/techImages";
import Frote from "../images/Frote.png";

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
  {
    title: "Frote(フローテ)",
    text: "タスク管理サービスです。バックエンドも含めた総合的なアプリケーションとして作成しました。apiやstateの勉強にもなりました。",
    img: Frote,
    name: "Frote",
    width: 300,
    height: 160,
    url: "https://frote.herokuapp.com/",
    usedTechImg: [reactImg, tsImg, styledComponentsImg, materialUiImg],
  },
];
