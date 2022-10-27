import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { onSnapshot, collection } from "firebase/firestore";

import SearchInput from "../SearchInput/SearchInput";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SignIn from "../SignIn/SignIn";
import Badge from "@mui/material/Badge";

import { IsAuthContext } from "../../context/isAuth";
import { auth, db } from "../../firebase-config";

import { CgProfile } from "react-icons/cg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Logo from "../../images/shopee-logo.png";

import {
  NavBarWrapper,
  LogoWrapper,
  ProfileWrapper,
  ChangeLang_Cart,
} from "./NavBar.style";

const COLLECTION = collection(db, "cart_Products");

const NavBar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);
  const [productsInCart, setProductsInCart] = useState<number>(0);
  const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false);

  const signInRef = useRef<HTMLDivElement | null>(null);
  const cartRef = useRef<HTMLDivElement | null>(null);

  const { isAuthStatus } = IsAuthContext();
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthStatus) {
      onSnapshot(COLLECTION, (snapsot) => {
        setProductsInCart(
          snapsot.docs.filter(
            (doc) => doc.data().userId === auth?.currentUser?.uid
          ).length
        );
      });
    } else {
      setProductsInCart(0);
    }
  }, [isAuthStatus, auth]);

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
        {isAuthStatus && auth?.currentUser?.photoURL ? (
          <img src={auth.currentUser.photoURL} />
        ) : (
          <CgProfile size={25} />
        )}
        {isAuthStatus && auth?.currentUser?.displayName ? (
          <p>{auth.currentUser.displayName}</p>
        ) : (
          <p>{t("profile")}</p>
        )}
      </ProfileWrapper>
      <ChangeLang_Cart>
        <div onClick={shoppingCart} ref={cartRef}>
          <Badge badgeContent={productsInCart} color="primary">
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
      {showSignInPopUp && (
        <SignIn setShowSignInPopUp={setShowSignInPopUp} signInRef={signInRef} />
      )}
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
