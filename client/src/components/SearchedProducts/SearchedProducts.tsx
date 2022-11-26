import React, { useEffect, memo, useState, useRef } from "react";

import { useFindProductByName } from "../../hooks/useFindProductByName";
import SearchedProduct from "./SearchedProduct/SearchedProduct";

import { IProducts } from "../../interfaces";

import { ProductWrapper } from "./SearchedProducts.style";
import Loader from "../Loader/Loader";

interface Props {
  value: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchedProducts: React.FC<Props> = memo(({ value, setShow }) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const searchedProducstRef = useRef<HTMLDivElement | null>(null);

  const { findproductByName, loading, error } = useFindProductByName();

  useEffect(() => {
    (async () => {
      const FilteredProducts = await findproductByName(value);
      setProducts(FilteredProducts);
    })();
  }, [value]);

  const handleOutsideClick = (e: any) => {
    const { target } = e;

    if (!searchedProducstRef.current?.contains(target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <ProductWrapper ref={searchedProducstRef}>
      {loading && <Loader />}
      {!loading &&
        products?.map((product: IProducts) => (
          <SearchedProduct key={product?._id} product={product} />
        ))}

      {!loading && error && <p>{error}</p>}
    </ProductWrapper>
  );
});

export default SearchedProducts;
