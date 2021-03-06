import { cardItemsType } from "../Type";
import {
  reactImg,
  tsImg,
  styledComponentsImg,
  materialUiImg,
  htmlCssImg,
  jsImg,
  cppImg,
  cImg,
  javaImg,
  cudacImg,
  verilogImg,
  phpImg,
  mysqlImg,
} from "..//images/technic/techImages";
import { gitImg } from "../images/study/studyImges";
import { laravelImg } from "../images/technic/techImages";

export const skillItems: cardItemsType[] = [
  {
    title: "React",
    text: "このポートフォリオを作成した言語です。書籍「りあクト！」とUdemyの講座で勉強しました。想像していたよりも難しかったですが、コンポーネント指向の考え方は好きです。",
    img: reactImg,
    name: "React",
    width: 160,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "TypeScript",
    text: "これからの新規開発ではTypeScriptを使っていくだろうなと考えたのと、型付き言語じゃないのにとても違和感を感じていたので採用しました。ただ、型が多すぎて判断しづらいのが難点です。",
    img: tsImg,
    name: "TypeScript",
    width: 160,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "styled-components",
    text: "css in JSでまとめて書けるのが好きなので採用しました。Reactととても相性が良いと感じていますが、Tailwid CSSなどの方が採用率は高いような気がします。",
    name: "styled-components",
    width: 160,
    height: 160,
    img: styledComponentsImg,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "material-ui",
    text: "最初はデザインに時間をかけすぎたくなかったため、Reactにおいて広く使われているUIコンポーネントライブラリとして採用しました。細かいところで手が届かないので、最終的には全部自分で実装した方が良いのかなと感じています。",
    img: materialUiImg,
    name: "material-ui",
    width: 160,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "Laravel",
    text: "apiサーバーとしてバックエンドを使う際にルーティングやDB操作などのコストを下げるために導入しました。MVCアーキテクチャはあまり好きではないです。",
    img: laravelImg,
    name: "laravel",
    width: 200,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "PHP",
    text: "バックエンドの言語として学習しましたが、laravelの機能が強すぎてあまり素で使う機会はありませんでした。",
    img: phpImg,
    name: "php",
    width: 200,
    height: 160,
    rate: 2,
    usedTechImg: [""],
  },
  {
    title: "mySQL",
    text: "基本的なSQLで基礎を学びたかったので選択しました。postgreSQLもやってみたいと思っています",
    img: mysqlImg,
    name: "mysql",
    width: 200,
    height: 160,
    rate: 2,
    usedTechImg: [""],
  },
  {
    title: "Git",
    text: "チーム開発には必須だと聞いたので使うようにしました。個人的なファイルも開発しているアプリケーションもGitHubで管理しています。",
    img: gitImg,
    name: "Git",
    width: 160,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "HTML/CSS",
    text: "Progateと書籍を読んで勉強しました。その後は開発しながら覚えている最中です",
    img: htmlCssImg,
    name: "HTML CSS",
    width: 220,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "JavaScript",
    text: "Progateと「JavaScript本格入門」を読んで勉強しました。その後はReactを使いながら覚えています。JavaScriptだけで開発したことはありません。",
    img: jsImg,
    name: "JavaScript",
    width: 160,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "C",
    text: "大学で主に使っていた言語です。メモリ確保や解法などすべて自分でやらないといけませんでしたが、プログラミング言語の仕組みがよく分かりました。",
    img: cImg,
    name: "C言語",
    width: 160,
    height: 160,
    rate: 4,
    usedTechImg: [""],
  },
  {
    title: "C++",
    text: "AtCoderでの使用言語です。C言語から移行した時は便利さに感動しました。",
    img: cppImg,
    name: "C++",
    width: 160,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
  {
    title: "Java",
    text: "学校の講義で少しだけ使用しました。ガベージコレクションに感動していた覚えがあります。",
    img: javaImg,
    name: "Java ",
    width: 160,
    height: 160,
    rate: 2,
    usedTechImg: [""],
  },
  {
    title: "Verilog HDL",
    text: "FPGA用の言語です。研究室の講義で少し使用しましたが、効率の良いプログラムをかけるレベルではありません。",
    img: verilogImg,
    name: "verilog ",
    width: 160,
    height: 160,
    rate: 1,
    usedTechImg: [""],
  },
  {
    title: "CUDA C",
    text: "NVIDIA製GPU用の言語です。この言語を使用して研究を行っています。",
    img: cudacImg,
    name: "CUDA C ",
    width: 250,
    height: 160,
    rate: 3,
    usedTechImg: [""],
  },
];
