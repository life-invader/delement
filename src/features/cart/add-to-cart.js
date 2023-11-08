import { addToCart } from "../../entities/product/model";

export const addProductToCart = async (productId) => {
  await addToCart(productId);
};
