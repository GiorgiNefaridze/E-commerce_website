import React, { useState, useEffect, useCallback } from "react";
import { onSnapshot, updateDoc, doc, collection } from "firebase/firestore";

import { auth, db } from "../../../firebase-config";
import { IProducts } from "../../../interfaces";

import { ProductCartWrapper } from "../ShoppingCart.style";
interface Props {
  product: IProducts;
}

const COLLECTION = collection(db, "cart_Products");

const ShoppingCartItem: React.FC<Props> = ({ product }) => {
  const { img, title, price, basedPrice } = product;

  const [quantity, setQuantity] = useState<number>(1);

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
          <p>{basedPrice * quantity}$</p>
          <input type="number" value={quantity} onChange={updateQuantity} />
        </div>
      </div>
    </ProductCartWrapper>
  );
};

export default ShoppingCartItem;
