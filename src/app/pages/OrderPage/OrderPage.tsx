import type { FC } from "react";
import { useSpecialAppServiceGetOrderInfo } from "../../../shared/api/generated/query/special-app-service";
import { useParams } from "react-router";
import { OrderInfo } from "../../../widgets/ui";

export const OrderPage: FC = () => {
  const { id } = useParams();

  const { data } = useSpecialAppServiceGetOrderInfo(id ?? "");
  return (
    <>
      <OrderInfo order={data} />
    </>
  );
};
