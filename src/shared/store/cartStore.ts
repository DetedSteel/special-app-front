import { create } from "zustand";
import type { ICartStore } from "./model/cartStoreModel";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => ({ items: [...state.items, { ...item, quantity: 1 }] }));
      },
      deleteItem: (id) => {
        set((state) => ({ items: state.items.filter((e) => e.id !== id) }));
      },
      changeQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((e) => {
            if (e.id === id) {
              // if (e.quantity + quantity <= 0) {
              //   return null;
              // }
              return { ...e, quantity: e.quantity + quantity };
            }
            return e;
          }),
        }));
      },
      clearCart: () => {
        set(() => ({
          items: [],
        }));
      },
    }),
    { name: "cart-store", storage: createJSONStorage(() => localStorage) }
  )
);
