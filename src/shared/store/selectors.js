import { store } from "./store";

export const selectProducts = () => store.getState().products;
export const selectProduct = (productId) =>
  store.getState().products.find((item) => item.idProduct === productId);
export const selectIsProductInCart = (productId) =>
  store.getState().cart.productIds.includes(productId);
export const selectCart = () => store.getState().cart;
