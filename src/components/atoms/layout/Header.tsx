import styled from "styled-components";
import React,{FC} from "react";
import { Link } from "react-router-dom";

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

export const Header: FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
      <SAppBar position="static" color="inherit">
        {/*ここがあやしい */}
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
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