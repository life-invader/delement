import { store } from "./store";

export const saveProducts = store.getState().saveProducts;
export const addToCart = store.getState().addToCart;
export const removeFromCart = store.getState().removeFromCart;
export const applyPromo = store.getState().applyPromo;
export const restoreUserCart = store.getState().restoreCart;
export const placeUserOrder = store.getState().placeUserOrder;
