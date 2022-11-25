import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { CartProductsContext } from "../../../context/cartProductsContext";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";
import { useGetCartProducts } from "../../../hooks/useGetCartProducts";

import { LoaderWrapper } from "../../Loader/Loader.style";

import { IProducts } from "../../../interfaces";

import { ProductCartWrapper } from "../ShoppingCart.style";
interface Props {
  product: IProducts;
}

const ShoppingCartItem: React.FC<Props> = ({ product }) => {
  const [eachProduct, setEachProduct] = useState<IProducts>(product);
  const [loading, setLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(eachProduct?.amount);
  const [price, setPrice] = useState<number>(eachProduct?.price);

  const { t } = useTranslation();
  const { products } = CartProductsContext();
  const { getCartProducts } = useGetCartProducts();
  const { deleteProduct } = useDeleteProduct();

  const changeQuantity = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const val = Number(value);

    if (val >= 1 && eachProduct?.userId) {
      setQuantity(val);
      setLoading(true);

      const response = await fetch(
        process.env.REACT_APP_HOST + "/api/product/updateProductQuantity",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: product?._id,
            quantity: val,
            price: product?.originalPrice * val,
          }),
        }
      );

      await getCartProducts(eachProduct?.userId);

      const result = await response.json();

      setEachProduct(result);
      setPrice(result.price);

      setLoading(false);
    }
  };

  const deleteProductFromCart = async (id: string | undefined) => {
    if (id) {
      await deleteProduct(id);
    }
  };

  return (
    <ProductCartWrapper>
      {loading ? (
        <LoaderWrapper width={10} />
      ) : (
        <>
          <img src={eachProduct?.img} />
          <div>
            <span>
              {eachProduct?.title?.length > 30
                ? eachProduct?.title.slice(0, 30) + "..."
                : eachProduct?.title}
            </span>
            <div>
              <p>{Math.floor(price)}$</p>
              <input type="number" value={quantity} onChange={changeQuantity} />
            </div>
          </div>
          <p
            title={t("close")}
            onClick={() => deleteProductFromCart(eachProduct?._id)}
          >
            X
          </p>
        </>
      )}
    </ProductCartWrapper>
  );
};

export default ShoppingCartItem;
