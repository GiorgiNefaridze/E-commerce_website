import { CartProductsContext } from "../context/cartProductsContext";

export const useDeleteProduct = () => {
  const { setProducts } = CartProductsContext();

  const deleteProduct = async (id: string) => {
    const response = await fetch(
      `http://localhost:5000/api/product/deleteProductFromCart/${id}`,
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
