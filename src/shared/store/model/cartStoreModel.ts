import type { SpecialAppV1GetItemInfoResponse } from "../../api/generated/model";

export interface cartItem extends SpecialAppV1GetItemInfoResponse {
  quantity: number;
}

export interface ICartStore {
  items: cartItem[];
  addItem: (item: cartItem) => void;
  deleteItem: (id: string) => void;
  changeQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}
