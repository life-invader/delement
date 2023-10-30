import { createStore } from "zustand";

export const store = createStore((set) => ({
  products: [],
  saveProducts: (products) => set(() => ({ products })),
}));

export const { getState, setState, subscribe } = store;
export const saveProducts = store.getState().saveProducts;
export const selectProducts = () => store.getState().products;
