import type { FC } from "react";
import { Link } from "react-router";
import type { SpecialAppV1OrderItemInfoForList } from "../../../shared/api/generated/model";

export const OrderItemCard: FC<{ item: SpecialAppV1OrderItemInfoForList | undefined }> = ({
  item,
}) => {
  return (
    <div className="mb w-full flex flex-col bg-light-beige rounded-xl p-3">
      <Link to={`/products/${item?.itemId}`}>
        <div className="w-full flex flex-col items-center">
          <p className="text-[18px]">{item?.title}</p>
          <img className="w-16 rounded-2xl" src={item?.picture} />
        </div>
        <p>В заказе {item?.quantity} шт.</p>

        <p>Цена за шутку {item?.price} р.</p>
      </Link>
    </div>
  );
};
