import { useState, VFC } from "react";
import styled from "styled-components";

import monsterBall from "../../assets/images/monsterBall.jpg";
import { DetailButton } from "../atoms/button/DetailButton";

interface profileItemType {
  id: number;
  type: string;
  content: string;
  detail: boolean;
  detailText?: string;
}

const profileItem: profileItemType[] = [
  {
    id: 1,
    type: "名前",
    content: "齊藤紡生",
    detail: false,
  },
  {
    id: 2,
    type: "所属",
    content: "三重大学工学研究科情報工学専攻コンピュータアーキテクチャ研究室",
    detail: true,
    detailText:
      "簡単に言うと三重大学の情報工学系の大学院でハードウェア方面に関する研究をしています。",
  },
  {
    id: 3,
    type: "研究内容",
    content: "MESI-CUDAを用いたCUDAプログラミングの抽象化",
    detail: true,
    detailText:
      "簡単に言うとGPUでのプログラミングを楽に書ける仕組みを作ろうという研究です。詳しい先行研究の内容はGoogleScolorで調べるといくつか出てきます。",
  },
  {
    id: 4,
    type: "趣味",
    content: "プログラミング、ランニング、ゲーム、読書、ギターなど",
    detail: true,
    detailText:
      "高校生の頃初めてC言語に触って以来プログラミングが好きになりました。大学では友達に誘われて競技プログラミングをのんびりやっています。中学、高校、大学と陸上部だったので、走ることは好きです。",
  },
  {
    id: 5,
    type: "出身",
    content: "福井県",
    detail: false,
  },
];

const name = "つむぎ";
export const Profile: VFC = () => {
  const [num, setNum] = useState<number>(0);
  const openClose = (num: number, newNum: number) => {
    if (num === newNum) setNum(0);
    else setNum(newNum);
  };
  return (
    <SContentsWrapper>
      <SImg height={160} width={160} src={monsterBall} alt={name} />
      <SName>{name}</SName>
      {profileItem.map((text) => {
        return (
          <SProfileContainer key={text.id}>
            <SOrganismContainer>
              <SMoleculesContainer>
                <STextContainer>
                  <SType>{text.type}</SType>
                  <SContent>{text.content}</SContent>
                </STextContainer>
                <SUnderLine />
              </SMoleculesContainer>
              <SHiddenContents>
                {num === text.id ? (
                  <SHiddenDetail>{text.detailText}</SHiddenDetail>
                ) : null}
              </SHiddenContents>
            </SOrganismContainer>
            <SDetail>
              {text.detail ? (
                <DetailButton onClick={openClose} num={num} newNum={text.id}>
                  詳細
                </DetailButton>
              ) : null}
            </SDetail>
          </SProfileContainer>
        );
      })}
    </SContentsWrapper>
  );
};

const SContentsWrapper = styled.div`
  padding-top: 100px;
`;

const SProfileContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

const SMoleculesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;
const STextContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;

const SType = styled.div`
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  width: 200px;
`;
const SContent = styled.div`
  font-size: 28px;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SUnderLine = styled.div`
  padding: 3px;
  border-bottom: 2px solid #fff;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

const SDetail = styled.div`
  margin-left: 5px;
`;

const SHiddenDetail = styled.div`
  text-align: left;
  font-size: 20px;
  border-radius: 5px 5px 5px 5px;
  border: solid 3px white;
  padding: 15px 0 15px 10px;
  margin-top: 8px;
  width: 98.7%;
  height: auto;
`;

const SOrganismContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
`;

const SHiddenContents = styled.div``;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
