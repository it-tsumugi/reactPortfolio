//titleをkeyに使っているので一意である必要があることに注意
type eventItemsType = {
  date: string;
  title: string;
  text?: string;
};

export const eventItems: eventItemsType[] = [
  {
    date: "2015-04",
    title: "C言語に初めて触れる",
    text: "ネットで「苦しんで覚えるC言語」というサイトを見つけて演習問題を紙に書いて解く。どうしてもパソコンでやってみたかったが開発環境がうまく作れず挫折、ポインタもいまいち理解できずしばらくプログラミングから離れる。",
  },
  {
    date: "2017-04",
    title: "三重大学に入学",
    text: "大学の講義でC言語の学習を開始。三重大学の英語特別プログラムをとり、フランス語や中国語などの代わりに英語を中心的に学ぶ。",
  },
  {
    date: "2017-08",
    title: "塾講師としてアルバイトを開始",
  },
  {
    date: "2018-02",
    title: "イギリスへ短期留学",
    text: "三重大学での英語特別プログラムで１ヶ月ほどイギリスへホームステイ。",
  },
  {
    date: "2018-08",
    title: "初めてHTML、CSS、JavaScriptに触れる",
    text: "夏休みで時間があったのでホームページを作ろうとしましたが、プログラム量がとても長くなることに嫌気がさしてやめる。",
  },
  {
    date: "2019-06",
    title: "応用情報処理試験に不合格",
  },
  {
    date: "2019-12",
    title: "応用情報処理試験に合格",
  },
  {
    date: "2020-4",
    title: "コンピュータアーキテクチャ研究室に配属",
    text: "ソフトウェアの中でもハードウェア寄りの分野に興味があったため、その分野の研究室に所属。",
  },
  {
    date: "2020-5",
    title: "Atcoderを始める",
    text: "友人に誘われ競技プログラミングのAtcoderを始める。",
  },
  {
    date: "2020-9",
    title: "三重大学院入学試験に合格",
  },
  {
    date: "2021-3",
    title: "就職活動を開始",
    text: "当初の志望はSIer系やメーカー系であり、Web系の企業への関心はあまり高くなかった。",
  },
  {
    date: "2021-6",
    title: "Web企業を第1志望に",
    text: "自己分析や業界調査の結果、自分が作ったものが分かりやすく結果として見える職が良いと思いWeb企業を第1志望に変更。Web業界のリサーチを始める。",
  },
  {
    date: "2021-7",
    title: "技術選定を行いこの自己紹介サイトを作成",
    text: "出来るだけ現場に近い技術を使いたいと思い、React、Typescript、styled-componentsなどを採用。Udemyの動画や技術書典などの技術書で勉強し、ポートフォリオを作成。",
  },
  {
    date: "2021-10",
    title: "タスク管理アプリFroteを公開",
    text: "自分が欲しいと思ったタスク管理機能を実現したサービスを作成。LaravelとmySQLで作成したものをHerokuでデプロイし公開。",
  },
  {
    date: "2021-11",
    title: "アプリエンジニアとして長期インターンを開始",
    text: "株式会社SocialDogにて完全リモートでReact Nativeを使用したネイティブアプリ開発に参加。",
  },
  {
    date: "2022-4",
    title: "長期インターンを終了",
    text: "",
  },
];
