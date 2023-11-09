import { removeFromCart } from "../../shared/store/actions";

export const removeProductFromCart = async (productId) => {
  await removeFromCart(productId);
};
