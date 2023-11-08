import { removeFromCart } from "../../entities/product/model";

export const removeProductFromCart = async (productId) => {
  await removeFromCart(productId);
};
