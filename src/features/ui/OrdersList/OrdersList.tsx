import type { FC } from "react";
import type { SpecialAppV1GetOrdersResponse } from "../../../shared/api/generated/model";
import { OrderCard } from "../../../widgets/ui";
import { HeaderWithBackBtn } from "../../../shared";

export const OrdersList: FC<{ orders: SpecialAppV1GetOrdersResponse | undefined }> = ({
  orders,
}) => {
  return (
    <>
      <HeaderWithBackBtn text="Ваши заказы" />
      <div className="flex-col-gap">
        {orders?.orders?.map((order, _) => (
          <OrderCard key={order.id} orderInfo={order} />
        ))}
      </div>
    </>
  );
};
// компонент для списка карточек с событиями
