import styled from "styled-components";
import { VFC, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Tab, Tabs, AppBar, Menu, MenuItem, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

interface headerItemType {
  id: number;
  route: string;
  label: string;
}

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

export const Header: VFC = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SAppBar position="static" color="inherit">
      <STabs
        value={history.location.pathname}
        variant="fullWidth"
        indicatorColor="secondary"
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
      <SMenuContainer>
        <SMenuTitle>Tsumugi's PortFolio</SMenuTitle>
        <SMenuIconContainer>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {!anchorEl ? <MenuIcon /> : <CloseIcon />}
          </Button>
        </SMenuIconContainer>
        <SMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            HOME
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/profile">
            PROFILE
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/skill">
            SKILL
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/product">
            PRODUCT
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/study">
            STUDY
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/contact">
            CONTACT
          </MenuItem>
        </SMenu>
      </SMenuContainer>
    </SAppBar>
  );
};

const SMenuTitle = styled.p`
  text-align: left;
  font-size: 14px;
`;

const STabs = styled(Tabs)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const SMenuIconContainer = styled.div`
  margin-left: auto;
`;

const SMenu = styled(Menu)`
  margin-top: 30px;
`;

const SMenuContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const SAppBar = styled(AppBar)`
  background: #193278;
  color: #fff;
  padding: 8px 0;
`;
