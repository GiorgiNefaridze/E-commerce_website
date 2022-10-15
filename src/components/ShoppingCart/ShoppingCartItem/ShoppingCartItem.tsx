import React, { useState } from "react";

import { IProducts } from "../../../interfaces";

import { ProductCartWrapper } from "../ShoppingCart.style";

interface Props {
  product: IProducts;
}

const ShoppingCartItem: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
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
          <p>{product.price}$</p>
          <input type="number" value={quantity} onChange={updateQuantity} />
        </div>
      </div>
    </ProductCartWrapper>
  );
};

export default ShoppingCartItem;
