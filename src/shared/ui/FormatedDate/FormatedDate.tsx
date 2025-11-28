import { format } from "date-fns";
import { ru } from "date-fns/locale";
import type { FC } from "react";

const formatEventDate = (datetime?: string | null): string => {
  if (!datetime || datetime === "") {
    return "";
  }

  const date = new Date(datetime);

  return format(date, "d MMMM yyyy", { locale: ru });
};

export const FormatedDate: FC<{ date: string | undefined }> = ({ date }) => {
  const formatted = formatEventDate(date);

  return <p>{formatted}</p>;
};
