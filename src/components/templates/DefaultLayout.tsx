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
    <SPageWrapper>
      <Header />
      {children}
      <Footer />
    </SPageWrapper>
  );
});

const SPageWrapper = styled.div`
  //サイト全体での文字色と背景色
  color: white;
  background-color: #294286;
  //フッターの固定
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
