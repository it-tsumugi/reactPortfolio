import { useState, VFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../../assets/styles/media";

import { Menu, MenuItem, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { headerItem } from "../../../assets/data/headerItem";

export const HeaderMenu: VFC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <SComponentContainer>
      <SMenuTitle>Tsumugi's PortFolio</SMenuTitle>
      <SMenuIconContainer>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {!anchorEl ? (
            <MenuIcon style={{ color: "white" }} />
          ) : (
            <CloseIcon style={{ color: "white" }} />
          )}
        </Button>
      </SMenuIconContainer>
      <SMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {headerItem.map((val) => {
          return (
            <MenuItem onClick={handleClose} component={Link} to={val.route}>
              {val.label}
            </MenuItem>
          );
        })}
      </SMenu>
    </SComponentContainer>
  );
};

const SComponentContainer = styled.div`
  display: none;

  ${media.lessThanlg`
    display: flex;
  `}
`;

const SMenuIconContainer = styled.div`
  margin-left: auto;
`;

const SMenu = styled(Menu)`
  margin-top: 30px;
`;

const SMenuTitle = styled.p`
  text-align: left;
  font-size: 14px;
`;
