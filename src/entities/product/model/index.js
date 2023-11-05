import { createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const store = createStore(
  persist(
    (set) => ({
      products: [],
      saveProducts: (products) => set(() => ({ products })),
    }), {
      name: "products", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export const { getState, setState, subscribe } = store;
export const saveProducts = store.getState().saveProducts;
export const selectProducts = () => store.getState().products;
