import { VFC } from "react";
import { Header } from "../atoms/layout/Header";

type PropsType = {
  children: any;
};
export const HeaderOnly: VFC<PropsType> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
