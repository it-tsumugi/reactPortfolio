import { VFC } from "react";
import styled from "styled-components";

import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";

type PropsType = {
  children: React.ReactElement;
};

export const DefaultLayout: VFC<PropsType> = (props) => {
  const { children } = props;
  return (
    <SComponentContainer>
      <Header />
      {children}
      <Footer />
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  //ページ共通のスタイル
  color: white;
  background-color: #294286;
  //フッターの固定
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
