import React, { useState, useEffect } from "react";
import { onSnapshot, updateDoc, doc } from "firebase/firestore";

import { db } from "../../../firebase-config";
// import { COLLECTION } from "../../ProductDetail/ProductDetail";
import { IProducts } from "../../../interfaces";

import { ProductCartWrapper } from "../ShoppingCart.style";

interface Props {
  product: IProducts;
}

const ShoppingCartItem: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [productPrice, setProductPrice] = useState<number>(product.price);

  useEffect(() => {
    if (quantity > 1) {
      console.log(quantity);
      updateDoc(doc(db, "products", product.id), {
        ...product,
        price: product.price * quantity,
      });
    }
  }, [quantity, product]);

  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    if (Number(value) >= 1) {
      setQuantity(Number(value));
    }
  };

  return (
    <ProductCartWrapper>
      <img src={product.img} />
      <div>
        <span>
          {product.title.length > 30
            ? product.title.slice(0, 30) + "..."
            : product.title}
        </span>
        <div>
          <p>{productPrice}$</p>
          <input type="number" value={quantity} onChange={updateQuantity} />
        </div>
      </div>
    </ProductCartWrapper>
  );
};

export default ShoppingCartItem;
