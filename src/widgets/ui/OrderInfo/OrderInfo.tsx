import type { FC } from "react";
import type { SpecialAppV1GetOrderInfoResponse } from "../../../shared/api/generated/model";
import { Link } from "react-router";
import { FormatedDate, HeaderWithBackBtn } from "../../../shared";
import { OrderItemCard } from "../OrderItemCard/OrderItemCard";

export const OrderInfo: FC<{ order: SpecialAppV1GetOrderInfoResponse | undefined }> = ({
  order,
}) => {
  return (
    <div className="w-full overflow-auto">
      <HeaderWithBackBtn text="Ваш заказ" />
      <div className="cardDiv">
        <div className="w-full flex justify-center">
          <p className="text-[20px]">Номер заказа: {order?.number}</p>
        </div>
        <div className="flex justify-between">
          <p>Сумма заказа:</p>
          <p>{order?.orderAmount} р.</p>
        </div>
        <div className="flex justify-between">
          <p>Статус:</p>
          <p>{order?.status}</p>
        </div>
        <div className="flex gap-0.5">
          <FormatedDate date={order?.formDate} />-<FormatedDate date={order?.completionDate} />
        </div>
        <p className="my-2">Состав заказа:</p>
        {/* <p>{order?.comment}</p> */}
        {order?.items?.map((item, index) => (
          <OrderItemCard item={item} />
        ))}
      </div>
    </div>
  );
};
