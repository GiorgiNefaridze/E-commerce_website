import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useLogOut } from "../../hooks/useLogOut";
import { AuthContext } from "../../context/authContext";
import { CartProductsContext } from "../../context/cartProductsContext";

import SearchInput from "../SearchInput/SearchInput";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SignIn from "../LogIn/LogIn";
import Badge from "@mui/material/Badge";

import { CgProfile } from "react-icons/cg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import {
  NavBarWrapper,
  LogoWrapper,
  ProfileWrapper,
  ChangeLang_Cart,
} from "./NavBar.style";

const NavBar: React.FC = () => {
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);
  const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false);

  const cartRef = useRef<HTMLDivElement | null>(null);

  const { t, i18n } = useTranslation();
  const { auth } = AuthContext();
  const { logout } = useLogOut();
  const { setProducts, products } = CartProductsContext();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (auth?.authStatus) {
        const response = await fetch(
          process.env.REACT_APP_HOST + "/api/product/getAllProductFromCart",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: auth?.id }),
          }
        );

        const result = await response.json();
        setProducts(result);
      } else {
        setProducts([]);
      }
    })();
  }, [auth]);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target;
    i18n.changeLanguage(value);
  };

  const naviagteToHome = (): void => {
    navigate("/");
  };

  const shoppingCart = (): void => {
    setShowShoppingCart((prev) => !prev);
  };

  const logOut = (): void => {
    logout();
  };

  return (
    <NavBarWrapper backgroundColor="#fafafa">
      <LogoWrapper onClick={naviagteToHome}>
        <h2>Shopee</h2>
      </LogoWrapper>
      <SearchInput />
      <ProfileWrapper>
        {auth?.authStatus && (
          <>
            <span>{auth.email}</span>
            <button onClick={logOut}>Log out</button>
          </>
        )}

        {!auth?.authStatus && (
          <div onClick={() => setShowSignInPopUp((prev) => !prev)}>
            <CgProfile size={25} />
            <p>{t("profile")}</p>
          </div>
        )}
      </ProfileWrapper>
      <ChangeLang_Cart>
        <div onClick={shoppingCart} ref={cartRef}>
          <Badge badgeContent={products?.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
        <select onChange={changeLanguage}>
          <option hidden>{t("change language")}</option>
          <option value="en">{t("english")}</option>
          <option value="ka">{t("georgian")}</option>
          <option value="ru">{t("russian")}</option>
        </select>
      </ChangeLang_Cart>
      {showSignInPopUp && <SignIn setShowSignInPopUp={setShowSignInPopUp} />}
      {showShoppingCart && (
        <ShoppingCart
          setShowShoppingCart={setShowShoppingCart}
          shoppingCartRef={cartRef}
        />
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
