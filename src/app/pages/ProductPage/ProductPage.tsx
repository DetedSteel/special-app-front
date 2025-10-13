import type { FC } from "react";
import { useParams } from "react-router";
import { useSpecialAppServiceGetItemInfo } from "../../../shared/api/generated/query/special-app-service";

export const ProductPage: FC = () => {
  const { id } = useParams();

  const { data } = useSpecialAppServiceGetItemInfo(id ?? "");

  return <div>{data?.description}</div>;
};
