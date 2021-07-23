import styled from "styled-components";
import {VFC, } from "react";
import { Link, useHistory} from "react-router-dom";

import { Tab, Tabs, AppBar } from "@material-ui/core";

interface headerItemPropsType{
  id: number; 
  route: string; 
  label: string 
}
const headerItem: headerItemPropsType[] = [
  {
    id: 1,
    route: "/",
    label: "HOME",
  },
  {
    id: 2,
    route: "/profile",
    label: "PROFILE",
  },
  {
    id: 3,
    route: "/skill",
    label: "SKILL",
  },
  {
    id: 4,
    route: "/product",
    label: "PRODUCT",
  },
  {
    id: 5,
    route: "/book",
    label: "STUDY",
  },
  {
    id: 6,
    route: "/contact",
    label: "CONTACT",
  },
];

export const Header: VFC = () => {
  const history = useHistory();
  return (
      <SAppBar position="static" color="inherit">
        <Tabs
          value={history.location.pathname}
          variant="fullWidth"
          indicatorColor="secondary"
          centered
          aria-label="simple tabs example"
        >
          {headerItem.map((val) => {
            return (
              <Tab
                label={val.label}
                value={val.route}
                key={val.id}
                component={Link}
                to={val.route}
              />
            );
          })}
        </Tabs>
      </SAppBar>
  );
};
const SAppBar = styled(AppBar)`
  background: #193278;
  color: #fff;
  padding: 8px 0;
`;