import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SearchInput from "../SearchInput/SearchInput";
import SignIn from "../SignIn/SignIn";

import { CgProfile } from "react-icons/cg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

import Logo from "../../images/shopee-logo.png";

import {
  NavBarWrapper,
  LogoWrapper,
  ProfileWrapper,
  ChangeLang_Cart,
} from "./NavBar.style";

const NavBar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);

  const navigate = useNavigate();

  const signInRef = useRef<HTMLDivElement>(null);

  const { t, i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
  };

  const naviagteToHome = (): void => {
    navigate("/");
  };

  return (
    <NavBarWrapper backgroundColor="#fafafa">
      <LogoWrapper onClick={naviagteToHome}>
        <img src={Logo} alt="logo" />
        <h2>Shopee</h2>
      </LogoWrapper>
      <SearchInput value={value} setValue={setValue} />
      <ProfileWrapper
        ref={signInRef}
        onClick={() => setShowSignInPopUp((prev) => !prev)}
      >
        <CgProfile size={25} />
        <p>{t("profile")}</p>
      </ProfileWrapper>
      <ChangeLang_Cart>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
        <select onChange={changeLanguage}>
          <option hidden>{t("change language")}</option>
          <option value="en">{t("english")}</option>
          <option value="ka">{t("georgian")}</option>
          <option value="ru">{t("russian")}</option>
        </select>
      </ChangeLang_Cart>
      {showSignInPopUp && (
        <SignIn setShowSignInPopUp={setShowSignInPopUp} signInRef={signInRef} />
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
