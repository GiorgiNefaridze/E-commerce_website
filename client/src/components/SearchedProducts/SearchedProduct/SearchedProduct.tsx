import React, { useState, useEffect } from "react";

import { IProducts } from "../../../interfaces";

import { SearchedProductWrapper } from "./SearchedProduct.style";

interface Props {
  product: IProducts;
}

const getRandomImage = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

const SearchedProduct: React.FC<Props> = ({ product }) => {
  const [image, setImage] = useState<string>("");

  const { title, listImg, brand, price } = product;

  useEffect(() => {
    if (listImg.length > 1) {
      const randomImage = getRandomImage(listImg);
      setImage(randomImage);
    }
  }, [listImg]);

  return (
    <SearchedProductWrapper>
      <img src={image} />
      <div>
        <span>{brand}</span>
        <h3>{title.length > 40 ? title.slice(0, 40) + "..." : title}</h3>
      </div>
      <p>{price + " $ "}</p>
    </SearchedProductWrapper>
  );
};

export default SearchedProduct;
