import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const [cartProduct, setCartProduct] = useState<IProducts[]>([]);
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const signInRef = useRef(null);

  const { id } = useParams();

  const { t } = useTranslation();

  useEffect(() => {
    // const getProductDetails = async () => {
    //   const { data } = await Products.get(`/product_detail/${id}`);
    //   setProduct(data);

    //   setLoading(false);
    // };

    // getProductDetails();
  }, [id]);

  useEffect(() => {
    // const getProductsFromCart = async () => {
    //   const { data } = await Products.get("/get_product_from_cart");
    //   setCartProduct(data);
    // };

    // getProductsFromCart();
  }, []);

  // useEffect(() => {
  //   if (
  //     cartProduct.filter(
  //       (item: IProducts) =>
  //         item?.userId === auth?.currentUser?.uid && item._id === product._id
  //     ).length >= 1
  //   ) {
  //     setAddedToCart(true);
  //   }
  // }, [cartProduct, product]);

  const addToCart = async () => {
    // if (!isAuthStatus) {
    //   setShowSignInPopUp(true);
    //   return;
    // }

    // await Products.post("/add_product_in_cart", {
    //   ...product,
    //   basedPrice: product.price,
    //   userId: auth?.currentUser?.uid,
    // });

    // const { data } = await Products.post("/check_product_from_cart", {
    //   id: product?._id,
    //   userId: auth?.currentUser?.uid,
    // });

    // if (!data) {
    //   await Products.post(
    //     "/add_product_in_cart",
    //     {
    //       ...product,
    //       basedPrice: product.price,
    //       userId: auth?.currentUser?.uid,
    //     }
    //   );

    // setAddedToCart(true);
    // }
  };

  return (
    <ProductWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Content>
            <Slider>
              <ProductDetailSlider images={product?.listImg} />
            </Slider>
            <DetailsWrapper>
              <DetailsWrapperHeader>
                <p>{product?.brand}</p>
                <h1>{product?.title}</h1>
                {product?.inStock ? (
                  <div>
                    <img src={InStock} />
                    <p>{t("in stock")}</p>
                  </div>
                ) : (
                  <div>
                    <img src={IsNotInStock} />
                    <p>{t("is not in stock")}</p>
                  </div>
                )}
              </DetailsWrapperHeader>
              <DetailsWrapperInner>
                <ul>
                  {product &&
                    Object.keys(product?.spec).map((key, idx) => (
                      <li key={idx}>
                        <span>{key}</span>
                        <div></div>
                        <span>{product?.spec[key]}</span>
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
            <label>
              <span className="material-symbols-outlined">local_mall</span>
              <BuyButtonWrapper
                added={addedToCart}
                ref={signInRef}
                onClick={() => addToCart()}
              >
                {!addedToCart ? t("buy") : t("in the cart")}
              </BuyButtonWrapper>
            </label>
          </Checkout> */}
        </>
      )}

      {showSignInPopUp && (
        <SignIn setShowSignInPopUp={setShowSignInPopUp} />
      )}
    </ProductWrapper>
  );
};

export default ProductDetail;
