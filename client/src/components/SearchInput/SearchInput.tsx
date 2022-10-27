import React from "react";
import { useTranslation } from "react-i18next";

import { Input } from "./SearchInput.style";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<Props> = ({ value, setValue }) => {
  const { t } = useTranslation();

  const chnageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  return (
    <Input placeholder={t("search")} value={value} onChange={chnageValue} />
  );
};

export default SearchInput;
