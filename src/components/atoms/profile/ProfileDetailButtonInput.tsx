import { VFC } from "react";
import styled from "styled-components";
import media from "../../../assets/styles/media";

type PropsType = {
  isDetail: boolean;
  id: number;
};

export const ProfileDetailButtonInput: VFC<PropsType> = (props) => {
  const { isDetail, id } = props;
  return <>{isDetail ? <SLabel htmlFor={"detail" + id}>詳細</SLabel> : null}</>;
};

const SLabel = styled.label`
  font-weight: normal;
  background-color: #193278;
  color: #e0e0e0;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  height: 100%;
  margin-left: 1em;

  font-size: 20px;
  min-width: 80px;
  border: solid 2px black;
  padding: 15px;
  margin-top: 6px;
  ${media.lg`
  font-size: 16px;
  min-width: 60px;
  border: solid 1px black;
  padding: 10px;
  margin-top: 10px;
  `}
  ${media.md`
  font-size: 8px;
  min-width: 35px;
  border: solid 1px black;
  padding: 5px;
  margin-top: 30px;
  `}
`;
