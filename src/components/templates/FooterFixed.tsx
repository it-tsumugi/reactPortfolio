import { VFC } from "react";
import { Footer } from "../molecules/layout/Footer";
import { Header } from "../atoms/layout/Header";

type PropsType = {
  children: React.ReactElement;
};

export const FooterFixed: VFC<PropsType> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer fixed={true} />
    </>
  );
};
