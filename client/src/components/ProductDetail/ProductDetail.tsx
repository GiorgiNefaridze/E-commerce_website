import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { AuthContext } from "../../context/authContext";
import { useAddProduct } from "../../hooks/useAddProduct";
import { useGetSeparatedProducts } from "../../hooks/useGetSepartedProduct";
import { useCheckProduct } from "../../hooks/useCheckProduct";

import ProductDetailSlider from "./ProductDetailSlider/ProductDetailSlider";
import SignIn from "../LogIn/LogIn";

import { IProducts } from "../../interfaces";

import {
  ProductWrapper,
  DetailsWrapper,
  Content,
  Checkout,
  Slider,
  DetailsWrapperInner,
  DetailsWrapperHeader,
  DiscountPrice,
  Price,
  BuyButtonWrapper,
} from "./ProductDetail.style";

import Loader from "../Loader/Loader";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<IProducts>({} as IProducts);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [productDesc, setProductDesc] = useState<any>();

  const signInRef = useRef(null);

  const { id } = useParams();
  const { t } = useTranslation();
  const { auth } = AuthContext();
  const { addProduct, error } = useAddProduct();
  const { getSeparatedProducts } = useGetSeparatedProducts();
  const { checkProduct } = useCheckProduct();

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);

        const separateProduct = await getSeparatedProducts(id, auth?.id);
        setProduct(separateProduct);

        setProductDesc(Object.entries(separateProduct?.spec).map((e) => e));
        setLoading(false);
      }
    })();
  }, [id, auth]);

  useEffect(() => {
    (async () => {
      if (id && auth?.authStatus && product.title) {
        const isAddedInCart = await checkProduct(auth?.id, product?.title);
        setAddedToCart(isAddedInCart.alredyAdded);
      }
    })();
  }, [id, auth, product]);

  const addToCart = async () => {
    if (!auth?.authStatus) {
      setShowSignInPopUp(true);
    }

    if (auth?.authStatus && product) {
      setAddedToCart(true);
      const { _id, ...others } = product;
      await addProduct(auth?.id, others);
    }
  };

  return (
    <ProductWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Content>
            <Slider>
              <ProductDetailSlider images={product?.listImg} />
            </Slider>
            <DetailsWrapper>
              <DetailsWrapperHeader>
                <p>{product?.brand}</p>
                <h1>{product?.title}</h1>
                {product?.inStock ? (
                  <div>
                    <p>{t("in stock")}</p>
                  </div>
                ) : (
                  <div>
                    <p>{t("is not in stock")}</p>
                  </div>
                )}
              </DetailsWrapperHeader>
              <DetailsWrapperInner>
                <ul>
                  {productDesc?.map((e: any, idx: number) => (
                    <li key={idx}>
                      <span>{e[0]}</span>
                      <div></div>
                      <span>{e[1]}</span>
                    </li>
                  ))}
                </ul>
              </DetailsWrapperInner>
            </DetailsWrapper>
          </Content>
          <Checkout>
            {product?.discountPrice ? (
              <DiscountPrice isDiscount={product?.discountPrice === undefined}>
                {product?.price}$
              </DiscountPrice>
            ) : null}
            {product?.discountPrice ? (
              <Price>{product?.discountPrice}$</Price>
            ) : (
              <Price>{product?.price}$</Price>
            )}
            <label>
              <span className="material-symbols-outlined">visibility</span>
              <p>{t("price control")}</p>
            </label>
            <label>
              <span className="material-symbols-outlined">lock</span>
              <p>{t("price lock")}</p>
            </label>
            <div>
              <span className="material-symbols-outlined">local_mall</span>
              <BuyButtonWrapper
                onClick={addToCart}
                added={addedToCart}
                ref={signInRef}
              >
                {!addedToCart ? t("buy") : t("in the cart")}
              </BuyButtonWrapper>
              {error}
            </div>
          </Checkout>
        </>
      )}

      {showSignInPopUp && <SignIn setShowSignInPopUp={setShowSignInPopUp} />}
    </ProductWrapper>
  );
};

export default ProductDetail;
