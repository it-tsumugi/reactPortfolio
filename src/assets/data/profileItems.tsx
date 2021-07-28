type profileItemsType = {
  id: number;
  type: string;
  text: string;
  isDetail: boolean;
  detailText?: string;
};

export const profileItems: profileItemsType[] = [
  {
    id: 1,
    type: "名前",
    text: "つむぎ",
    isDetail: false,
  },
  {
    id: 2,
    type: "所属",
    text: "三重大学工学研究科情報工学専攻コンピュータアーキテクチャ研究室",
    isDetail: true,
    detailText:
      "簡単に言うと三重大学の情報工学系の大学院でハードウェア方面に関する研究をしています。",
  },
  {
    id: 3,
    type: "研究内容",
    text: "MESI-CUDAを用いたCUDAプログラミングの抽象化",
    isDetail: true,
    detailText:
      "簡単に言うとGPUでのプログラミングを楽に書ける仕組みを作ろうという研究です。詳しい先行研究の内容はGoogleScolorで調べるといくつか出てきます。",
  },
  {
    id: 4,
    type: "趣味",
    text: "プログラミング、ランニング、ゲーム、読書、ギターなど",
    isDetail: true,
    detailText:
      "高校生の頃初めてC言語に触って以来プログラミングが好きになりました。大学では友達に誘われて競技プログラミングをのんびりやっています。中学、高校、大学と陸上部だったので、走ることは好きです。",
  },
  {
    id: 5,
    type: "出身",
    text: "福井県",
    isDetail: false,
  },
  {
    id: 6,
    type: "資格",
    text: "応用情報処理試験、TOEIC最高725点",
    isDetail: false,
  },
  {
    id: 7,
    type: "その他経歴",
    text: "イギリスへの短期留学、4年間塾講師としてアルバイト",
    isDetail: false,
  },
];
