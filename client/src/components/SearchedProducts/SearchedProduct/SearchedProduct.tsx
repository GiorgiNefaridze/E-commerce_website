import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { IProducts } from "../../../interfaces";

import { SearchedProductWrapper } from "./SearchedProduct.style";

interface Props {
  product: IProducts;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const getRandomImage = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

const SearchedProduct: React.FC<Props> = ({ product, setShow }) => {
  const [image, setImage] = useState<string>("");

  const { title, listImg, brand, price, _id } = product;

  const navigate = useNavigate();

  useEffect(() => {
    if (listImg.length > 1) {
      const randomImage = getRandomImage(listImg);
      setImage(randomImage);
    }
  }, [listImg]);

  const handleClick = () => {
    navigate(`/product/${_id}`);
    setShow(false);
  };

  return (
    <SearchedProductWrapper onClick={handleClick}>
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
