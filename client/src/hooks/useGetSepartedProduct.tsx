import { useState } from "react";

export const useGetSeparatedProducts = () => {

  const getSeparatedProducts = async (id: string | undefined, userId: string | undefined) => {
    const response = await fetch(
      "http://localhost:5000/api/product/getSeparatedProducts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, userId }),
      }
    );
    const result = await response.json();

    return result;
  };

  return { getSeparatedProducts };
};
