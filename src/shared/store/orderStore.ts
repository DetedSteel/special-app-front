import type { DateValue } from "@heroui/react";
import { create } from "zustand";
import type { IOrderStore } from "./model/orderStoreModel";

export const useOrderStore = create<IOrderStore>((set) => ({
  date: null,
  comment: "",
  setDate: (date: DateValue | null) => set({ date }),
  setComment: (comment: string) => set({ comment }),
}));
