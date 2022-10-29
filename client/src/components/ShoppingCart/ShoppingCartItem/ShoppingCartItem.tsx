import React, { useState, useEffect, memo } from "react";

import { Products } from "../../../api/Products";
import { LoaderWrapper } from "../../Loader/Loader.style";

import { auth } from "../../../firebase-config";
import { IProducts } from "../../../interfaces";

import { ProductCartWrapper } from "../ShoppingCart.style";
interface Props {
  id: string | undefined;
}

const ShoppingCartItem: React.FC<Props> = memo(({ id }) => {
  const [product, setProduct] = useState<IProducts>({} as IProducts);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const getProductFromCart = async () => {
      const { data } = await Products.post("/get_product_from_cart", {
        userId: auth?.currentUser?.uid,
        id: id,
      });

      setProduct(data);
      setLoading(false);
    };

    getProductFromCart();
  }, [auth]);

  const updateQuantity = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (Number(value) >= 1) {
    }
  };

  return (
    <ProductCartWrapper>
      {loading ? (
        <LoaderWrapper width={10} />
      ) : (
        <>
          <img src={product?.img} />
          <div>
            <span>
              {product?.title?.length > 30
                ? product?.title.slice(0, 30) + "..."
                : product?.title}
            </span>
            <div>
              <p>{Math.floor(product.price)}$</p>
              <input type="number" value={quantity} onChange={updateQuantity} />
            </div>
          </div>
        </>
      )}
    </ProductCartWrapper>
  );
});

export default ShoppingCartItem;
