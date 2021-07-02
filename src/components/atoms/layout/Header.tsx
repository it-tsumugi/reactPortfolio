import styled from "styled-components";
import {FC} from "react";
import { Link } from "react-router-dom";


export const Path = {
    home: "/",
    profile: "/profile",
    skill: "/skill",
    product: "/product",
    study: "/book",
    contact: "/contact",
  };

export const Header: FC = () => {
  return (
    <SHeader>
      <SLink to={Path.home}>Home</SLink>
      <SLink to={Path.profile}>Profile</SLink>
      <SLink to={Path.skill}>Skill</SLink>
      <SLink to={Path.product}>Product</SLink>
      <SLink to={Path.study}>Book</SLink>
      <SLink to={Path.contact}>Contact</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
    background-color: #193278;
    width: 100%;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`;

const SLink = styled(Link)`
    margin: 0 8px;
    color: white;
`;