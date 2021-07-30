import { memo, VFC } from "react";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";
import styled from "styled-components";

type PropsType = {
  children: React.ReactElement;
};

export const DefaultLayout: VFC<PropsType> = memo((props) => {
  const { children } = props;
  return (
    <SPageContainer>
      <Header />
      {children}
      <Footer />
    </SPageContainer>
  );
});

const SPageContainer = styled.div`
  //ページ共通のスタイル
  color: white;
  background-color: #294286;
  //フッターの固定
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
