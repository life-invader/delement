import { removeFromCart } from "../../entities/product/model";

export const removeProductFromCart = (productId) => {
  removeFromCart(productId);
};
