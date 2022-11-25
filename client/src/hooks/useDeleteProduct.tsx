import { CartProductsContext } from "../context/cartProductsContext";

export const useDeleteProduct = () => {
  const { setProducts } = CartProductsContext();

  const deleteProduct = async (id: string) => {
    const response = await fetch(
      process.env.REACT_APP_HOST + `/api/product/deleteProductFromCart/${id}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();

    if (response.ok) {
      setProducts(result);
    }
  };

  return { deleteProduct };
};
