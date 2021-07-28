import { memo, VFC } from "react";
import { Footer } from "../molecules/layout/Footer";
import { Header } from "../atoms/layout/Header";
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
