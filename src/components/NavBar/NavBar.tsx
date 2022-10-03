import React from "react";
import { CgProfile } from "react-icons/cg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

import SearchInput from "../SearchInput/SearchInput";

import Logo from "../../images/shopee-logo.png";

import {
  NavBarWrapper,
  LogoWrapper,
  ProfileWrapper,
  ChangeLang_Cart,
} from "./NavBar.style";

const NavBar: React.FC = () => {
  return (
    <NavBarWrapper backgroundColor="#fafafa">
      <LogoWrapper>
        <img src={Logo} alt="logo" />
        <h2>Shopee</h2>
      </LogoWrapper>
      <SearchInput />
      <ProfileWrapper>
        <CgProfile size={25} cursor="pointer" />
        <p>Profile</p>
      </ProfileWrapper>
      <ChangeLang_Cart>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
        <select>
          <option hidden>Change</option>
          <option value="en">Change</option>
          <option value="ka">Change</option>
          <option value="ru">Change</option>
        </select>
      </ChangeLang_Cart>
    </NavBarWrapper>
  );
};

export default NavBar;
