import { createStore } from "zustand";
import { persist, createJSONStorage, subscribeWithSelector } from "zustand/middleware";

const initialState = {
  products: [],
  cart: {
    productIds: [],
    qty: 0,
    total: 0,
    totalWithPromo: 0,
  },
};

export const store = createStore(
  persist(
    subscribeWithSelector((set, get) => ({
      ...initialState,
      saveProducts: (products) => set({ products }),
      addToCart: async (productId) => {
        const response = await fetch(`/cart/${productId}`, { method: "POST" });
        const data = await response.json();
        set({ cart: data });
      },
      removeFromCart: async (productId) => {
        const response = await fetch(`/cart/${productId}`, { method: "DELETE" });
        const data = await response.json();
        set({ cart: data });
      },
      applyPromo: async (promoCode) => {
        const response = await fetch(`/promo/${promoCode}`, { method: "POST" });
        const data = await response.json();
        set({ cart: data });
      },
      restoreCart: async () => {
        const response = await fetch("/cart/restore", {
          method: "POST",
          body: JSON.stringify(get().cart.productIds),
        });
        const data = await response.json();
        set({ cart: data });
      },
      placeUserOrder: async () => {
        const response = await fetch("/cart", {
          method: "POST",
        });
        const { message } = await response.json();
        console.debug(message);
        set({ ...initialState });
      },
    })), {
      name: "products",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const { getState, setState, subscribe } = store;
