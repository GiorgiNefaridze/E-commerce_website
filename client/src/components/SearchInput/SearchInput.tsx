import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import SearchedProducts from "../SearchedProducts/SearchedProducts";

import { Input } from "./SearchInput.style";

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const { t } = useTranslation();

  const chnageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  useEffect(() => {
    if (value) {
      setShow(true);
    }else{
      setShow(false)
    }
  }, [value]);

  return (
    <Input>
      <input placeholder={t("search")} value={value} onChange={chnageValue} />
      {show && <SearchedProducts value={value} setShow={setShow} />}
    </Input>
  );
};

export default SearchInput;
