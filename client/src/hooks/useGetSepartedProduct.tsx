export const useGetSeparatedProducts = () => {
  const getSeparatedProducts = async (
    id: string | undefined,
    userId: string | undefined
  ) => {
    const response = await fetch(
      process.env.REACT_APP_HOST + "/api/product/getSeparatedProducts",
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
