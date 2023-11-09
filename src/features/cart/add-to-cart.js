import { addToCart } from "../../shared/store/actions";

export const addProductToCart = async (productId) => {
  await addToCart(productId);
};
