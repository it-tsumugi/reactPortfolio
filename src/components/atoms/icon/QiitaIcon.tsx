import { VFC } from "react";

import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";

import { iconType } from "../../../assets/Type";
import { SBaseIcon } from "./SBaseIcon";
import styled from "styled-components";

export const QiitaIcon: VFC<iconType> = (props) => {
  const { url } = props;
  return (
    <SComponentContainer>
      <SBaseIcon>
        <LibraryBooksOutlinedIcon onClick={() => window.open(url)} />
      </SBaseIcon>
      <SText>(qiita)</SText>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SText = styled.div`
  font-weight: bold;
`;
