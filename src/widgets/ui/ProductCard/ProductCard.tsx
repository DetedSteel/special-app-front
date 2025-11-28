import { type FC } from "react";
import type { SpecialAppV1ItemInfoForList } from "../../../shared/api/generated/model";
import { Link } from "react-router";

export const ProductCard: FC<{ itemInfo: SpecialAppV1ItemInfoForList }> = ({ itemInfo }) => {
  const { id, title, picture, price } = itemInfo;
  return (
    <Link to={`${id}`}>
      <div className="cardDiv flex flex-col items-center">
        <img className="w-28 rounded-xl mb-3" src={picture} />
        <div className="w-full flex justify-between">
          <p>{title}</p>
          <p className="text-right w-[80px]">{price} р.</p>
        </div>
      </div>
    </Link>
  );
};
// кщьзщнент карточки товара
