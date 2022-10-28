import React, { useState, useEffect, memo, useRef } from "react";

import { auth } from "../../../firebase-config";
import { IProducts } from "../../../interfaces";

import { ProductCartWrapper } from "../ShoppingCart.style";
interface Props {
  product: IProducts;
}

const ShoppingCartItem: React.FC<Props> = memo(({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { img, title, price, _id } = product;

  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    if (Number(value) >= 1) {
      setQuantity(Number(value));
    }
  };

  return (
    <ProductCartWrapper>
      <img src={img} />
      <div>
        <span>{title.length > 30 ? title.slice(0, 30) + "..." : title}</span>
        <div>
          <p>{Math.floor(price)}$</p>
          <input type="number" value={quantity} onChange={updateQuantity} />
        </div>
      </div>
    </ProductCartWrapper>
  );
});

export default ShoppingCartItem;
