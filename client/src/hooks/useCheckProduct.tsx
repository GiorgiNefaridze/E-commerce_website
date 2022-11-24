export const useCheckProduct = () => {
  const checkProduct = async (userId: string, productTitle: string) => {
    const response = await fetch(
      "http://localhost:5000/api/product/checkProduct",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productTitle }),
      }
    );
    const result = await response.json();

    return result;
  };

  return { checkProduct };
};
