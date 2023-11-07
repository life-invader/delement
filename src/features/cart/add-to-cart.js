import { addToCart } from "../../entities/product/model";

export const addProductToCart = (productId) => {
  addToCart(productId);
};
