import { cardItemsType } from "../Type";
import {
  reactImg,
  tsImg,
  styledComponentsImg,
  materialUiImg,
} from "../images/technic/techImages";
import froteImg from "../images/Frote.png";
import introduceImg from "../images/introduce.png";
import { laravelImg, phpImg, mysqlImg } from "../images/technic/techImages";

export const productItems: cardItemsType[] = [
  {
    title: "ポートフォリオサイト",
    text: "自己紹介用のポートフォリオがほしいと思い、ReactやTypeScriptの勉強も兼ねて作成しました。",
    img: introduceImg,
    name: "ポートフォリオサイト",
    width: 280,
    height: 160,
    url: "https://it-tsumugi.github.io/reactPortfolio/",
    usedTechImg: [reactImg, tsImg, styledComponentsImg, materialUiImg],
  },
  {
    title: "Frote(フローテ)",
    text: "タスク管理サービスです。バックエンドも含めた総合的なアプリケーションとして作成しました。apiやstateの勉強にもなりました。",
    img: froteImg,
    name: "Frote",
    width: 300,
    height: 160,
    url: "https://frote.herokuapp.com/",
    usedTechImg: [
      reactImg,
      tsImg,
      styledComponentsImg,
      materialUiImg,
      laravelImg,
      phpImg,
      mysqlImg,
    ],
  },
];
