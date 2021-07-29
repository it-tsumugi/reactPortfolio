import styled from "styled-components";
import { VFC } from "react";

import { AppBar } from "@material-ui/core";
import { HeaderTabs } from "../../molecules/header/HeaderTabs";
import { HeaderMenu } from "../../molecules/header/HeaderMenu";

export const Header: VFC = () => {
  return (
    <SAppBar position="static" color="inherit">
      <HeaderTabs />
      <HeaderMenu />
    </SAppBar>
  );
};

const SAppBar = styled(AppBar)`
  background: #193278;
  color: #fff;
  padding: 8px 0;
`;
