import type { FC } from "react";
import type { SpecialAppV1OrderInfoForList } from "../../../shared/api/generated/model";
import { Link } from "react-router";
import { FormatedDate } from "../../../shared";

export const OrderCard: FC<{ orderInfo: SpecialAppV1OrderInfoForList }> = ({ orderInfo }) => {
  const { id, number, orderAmount, status, completionDate } = orderInfo;

  return (
    <Link to={`${id}`}>
      <div className="cardDiv flex flex-col gap-2">
        <p>Заказ номер: {number}</p>
        <p>На сумму: {orderAmount} р.</p>
        <p>Статус: {status}</p>
        <div>
          <p>Планируемая дата выполнения:</p>
          <FormatedDate date={completionDate} />
        </div>
      </div>
    </Link>
  );
};
