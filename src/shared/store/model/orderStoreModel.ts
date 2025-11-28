import type { DateValue } from "@heroui/react";

export interface IOrderStore {
  date: DateValue | null;
  comment: string;
  setDate: (date: DateValue | null) => void;
  setComment: (comment: string) => void;
}
