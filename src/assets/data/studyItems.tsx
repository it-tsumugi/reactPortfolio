import { cardItemsType } from "../Type";
import {
  reactImg,
  tsImg,
  styledComponentsImg,
  jsImg,
  htmlCssImg,
} from "../images/technic/techImages";

import {
  youtubeImg,
  progateImg,
  udemyGitImg1,
  udemyReactImg1,
  udemyReactImg2,
  udemyTsImg,
  bookHtmlCssImg,
  bookJsImg1,
  bookWebImg1,
  gitImg,
  bookReactImg1,
  bookReactImg2,
  bookReactImg3,
  bookReactImg4,
} from "../images/study/studyImges";

export const studyItems: cardItemsType[] = [
  {
    title: "りあクト！ Firebaseで始めるサーバーレスReact開発",
    text: "Firebaseを利用したサーバーレス開発について学びました。",
    img: bookReactImg4,
    name: "りあクト！ Firebaseで始めるサーバーレスReact開発",
    width: 160,
    height: 200,
    url: "https://oukayuka.booth.pm/items/1572683",
    usedTechImg: [reactImg, tsImg],
  },
  {
    title:
      "りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅲ. React応用編】",
    text: "Reduxなどの状態管理ツールがどのような歴史を辿ってきたかや、useEffectなどを用いた最適化などを学びました。",
    img: bookReactImg3,
    name: "りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅲ. React応用編】",
    width: 160,
    height: 200,
    url: "https://oukayuka.booth.pm/items/2367992",
    usedTechImg: [reactImg, tsImg],
  },
  {
    title:
      "りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅱ. React基礎編】",
    text: "TypesctiptやReactの基本的な文法について学びました。",
    img: bookReactImg2,
    name: "りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅱ. React基礎編】",
    width: 160,
    height: 200,
    url: "https://oukayuka.booth.pm/items/2368019",
    usedTechImg: [reactImg, tsImg],
  },

  {
    title:
      "りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅰ. 言語・環境編】",
    text: "ReactとTypeScriptの組み合わせを体系的に学べる書籍が欲しかったので購入しました。",
    img: bookReactImg1,
    name: "りあクト！ TypeScriptで始めるつらくないReact開発 第3.1版【Ⅰ. 言語・環境編】",
    width: 160,
    height: 200,
    url: "https://oukayuka.booth.pm/items/2368045",
    usedTechImg: [reactImg, tsImg, jsImg],
  },
  {
    title: "「超TypeScript入門 完全パック(2021)」(udemy)",
    text: "TypeScriptの型定義について詳細に知りたかったので購入しました。現在も参考にしています。",
    img: udemyTsImg,
    name: "超TypeScript入門 完全パック(2021)",
    width: 300,
    height: 160,
    url: "https://www.udemy.com/course/typescript-complete/",
    usedTechImg: [tsImg],
  },
  {
    title: "Webを支える技術 ",
    text: "Webの仕組みそのものを知りたかったので読みました。かなり難しかったですが、基本的な構造や歴史は把握出来ました。",
    img: bookWebImg1,
    name: "Webを支える技術",
    width: 160,
    height: 200,
    url: "https://www.amazon.co.jp/Web%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93-HTTP%E3%80%81URI%E3%80%81HTML%E3%80%81%E3%81%9D%E3%81%97%E3%81%A6REST-WEB-PRESS-plus/dp/4774142042",
    usedTechImg: [],
  },
  {
    title: "「もう怖くないGit！チーム開発で必要なGitを完全マスター」(udemy)",
    text: "チーム開発には必須と聞いたので勉強しました。日常で使っているドキュメントや自分の開発しているサ―ビスのコードもすべてGitで管理しています。一応Git-flowも使っています。",
    img: udemyGitImg1,
    name: "もう怖くないGit！チーム開発で必要なGitを完全マスター",
    width: 300,
    height: 160,
    url: "https://www.udemy.com/course/unscared_git/",
    usedTechImg: [gitImg],
  },
  {
    title:
      "「Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版」(udemy)",
    text: "再レンダリングやルーティング、Atomic Design、state管理の方法などを学び、簡単なWebサイトなら作れるようになりました。",
    img: udemyReactImg2,
    name: "Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版",
    width: 300,
    height: 160,
    url: "https://www.udemy.com/course/react_stepup/",
    usedTechImg: [reactImg, tsImg, styledComponentsImg],
  },
  {
    title:
      "「モダンJavaSciptの基礎から始める挫折しないためのReact入門」(udemy)",
    text: "Reactの基礎をこのudemy講座で学びました。少し言葉足らずな部分もありましたが、なんとなくの外観をつかむことが出来ました。",
    img: udemyReactImg1,
    name: "モダンJavaSciptの基礎から始める挫折しないためのReact入門",
    width: 300,
    height: 160,
    url: "https://www.udemy.com/course/modern_javascipt_react_beginner/",
    usedTechImg: [reactImg, jsImg],
  },
  {
    title: "JavaScript本格入門",
    text: "体系的にJavaScriptを学ぶのに利用しました。とてもよくまとまっていて、今でも参考書がわりに使っています。",
    img: bookJsImg1,
    name: "JavaScript本格入門",
    width: 160,
    height: 200,
    url: "https://www.amazon.co.jp/%E6%94%B9%E8%A8%82%E6%96%B0%E7%89%88JavaScript%E6%9C%AC%E6%A0%BC%E5%85%A5%E9%96%80-%EF%BD%9E%E3%83%A2%E3%83%80%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AB%E3%82%88%E3%82%8B%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E7%8F%BE%E5%A0%B4%E3%81%A7%E3%81%AE%E5%BF%9C%E7%94%A8%E3%81%BE%E3%81%A7-%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B-ebook/dp/B01LYO6C1N",
    usedTechImg: [htmlCssImg],
  },
  {
    title: "1冊ですべて身につくHTML & CSSとWebデザイン入門講座",
    text: "Progateでの学習後のHTMLとCSSの基礎的な知識を学ぶのに利用しました。一回読んだだけではあまりよく分からなかったですが、スタイリングをする際に参考書として使用しています。",
    img: bookHtmlCssImg,
    name: "1冊ですべて身につくHTML & CSSとWebデザイン入門講座",
    width: 160,
    height: 200,
    url: "https://www.amazon.co.jp/1%E5%86%8A%E3%81%A7%E3%81%99%E3%81%B9%E3%81%A6%E8%BA%AB%E3%81%AB%E3%81%A4%E3%81%8FHTML-CSS%E3%81%A8Web%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E5%85%A5%E9%96%80%E8%AC%9B%E5%BA%A7-Mana/dp/4797398892",
    usedTechImg: [htmlCssImg],
  },
  {
    title: "Progate",
    text: "基本的な知識を学ぶために利用しました。1つの言語あたり1日程で終わらせた後は書籍やudemyなどで深い勉強をしていきました。",
    img: progateImg,
    name: "Progate",
    width: 160,
    height: 160,
    url: "https://prog-8.com/courses",
    usedTechImg: [jsImg, htmlCssImg, reactImg],
  },
  {
    title: "YouTube",
    text: "浅く広くweb業界に関する知識を集めるのに少し参考にしました。ただあまり情報の質が良くないので、休憩時間中にWeb業界に関する動画を流し見する程度です。",
    img: youtubeImg,
    name: "YouTube",
    width: 200,
    height: 160,
    url: "https://www.youtube.com/c/shimabu_it/videos",
    usedTechImg: [reactImg, tsImg, jsImg],
  },
];
