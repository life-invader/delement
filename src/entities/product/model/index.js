import { createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const store = createStore(
  persist(
    (set) => ({
      products: [],
      cart: [],
      saveProducts: (products) => set(() => ({ products })),
      addToCart: (productId) =>
        set(({ cart }) => {
          const updatedCart = cart.slice();
          updatedCart.push(productId);
          return { cart: updatedCart };
        }),
      removeFromCart: (productId) =>
        set(({ cart }) => {
          const updatedCart = cart.filter((item) => item !== productId);
          return { cart: updatedCart };
        }),
    }), {
      name: "products",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const { getState, setState, subscribe } = store;

// Actions
export const saveProducts = store.getState().saveProducts;
export const addToCart = store.getState().addToCart;
export const removeFromCart = store.getState().removeFromCart;

// Selectors
export const selectProducts = () => store.getState().products;
export const selectProduct = (productId) =>
  store.getState().products.find((item) => item.idProduct === productId);
export const selectIsProductInCart = (productId) => store.getState().cart.includes(productId);
export const selectCart = () => store.getState().cart;
