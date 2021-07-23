import { VFC } from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";

interface PropsType {
  num: number;
  newNum: number;
  onClick: (num: number, newNum: number) => void;
  children: string;
}

export const DetailButton: VFC<PropsType> = (props) => {
  const { num, newNum, onClick, children } = props;
  return (
    <SDetailButton onClick={() => onClick(num, newNum)}>
      {children}
    </SDetailButton>
  );
};

const SDetailButton = styled(Button)`
  font-size: 20px;
  font-weight: normal;
  background-color: #193278;
  color: #e0e0e0;
  padding: 15px;
  border: solid 2px black;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  width: 100px;
  height: 95%;
  min-height: 50px;
  max-height: 500px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
`;
