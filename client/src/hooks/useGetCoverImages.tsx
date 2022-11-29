import { useState } from "react";

interface IData {
  _id: string;
  img: string
}

export const useGetCoverImages = () => {
  const [data, setData] = useState<IData[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const getCoverImages = async () => {
    setLoading(true);

    const response = await fetch(
      process.env.REACT_APP_HOST + "/api/product/getCoverImages"
    );

    const result = await response.json();

    if (response.ok) {
      setData(result);
    }

    setLoading(false);
  };

  return { getCoverImages, loading, data };
};
