import { memo, VFC } from "react";
import { Footer } from "../molecules/layout/Footer";
import { Header } from "../atoms/layout/Header";

type PropsType = {
  children: React.ReactElement;
  fixed: boolean;
};

export const DefaultLayout: VFC<PropsType> = memo((props) => {
  const { children, fixed } = props;
  return (
    <>
      <Header />
      {children}
      <Footer fixed={fixed} />
    </>
  );
});
