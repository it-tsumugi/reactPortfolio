import { VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../../assets/styles/media";
import { useHistory } from "react-router-dom";

import { Tab, Tabs } from "@material-ui/core";

type headerItemType = {
  id: number;
  route: string;
  label: string;
};

const headerItem: headerItemType[] = [
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
    route: "/study",
    label: "STUDY",
  },
  {
    id: 6,
    route: "/contact",
    label: "CONTACT",
  },
];

export const HeaderTabs: VFC = () => {
  const history = useHistory();
  return (
    <STabs
      value={history.location.pathname}
      variant="fullWidth"
      indicatorColor="primary"
      centered
      aria-label="headerTabs"
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
    </STabs>
  );
};

const STabs = styled(Tabs)`
  ${media.lessThanlg`
    display: none;
    `}
`;
