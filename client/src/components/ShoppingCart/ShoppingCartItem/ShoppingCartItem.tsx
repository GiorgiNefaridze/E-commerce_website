import React, { useState, useEffect, memo, useRef } from "react";
import { onSnapshot, updateDoc, doc, collection } from "firebase/firestore";

import { auth } from "../../../firebase-config";
import { IProducts } from "../../../interfaces";

import { ProductCartWrapper } from "../ShoppingCart.style";
interface Props {
  product: IProducts;
  tprice: boolean;
}


const ShoppingCartItem: React.FC<Props> = memo(({ product, tprice }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { img, title, price, id } = product;

  const amountRef = useRef<number>(1);

  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    if (Number(value) >= 1) {
      setQuantity(Number(value));
    }
  };

  // useEffect(() => {
  //   amountRef.current = quantity;

  //   onSnapshot(COLLECTION, (snaposhot) => {
  //     snaposhot.docs
  //       .filter(
  //         (doc) =>
  //           doc.data().userId === auth?.currentUser?.uid && doc.data().id === id
  //       )
  //       .map((item) =>
  //         updateDoc(doc(db, "cart_Products", item.data().id), {
  //           amount: amountRef.current,
  //         })
  //       );
  //   });
  // }, [amountRef.current]);

  // useEffect(() => {
  //   if(quantity > 1){
      
  //   }
  // }, [quantity])

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
