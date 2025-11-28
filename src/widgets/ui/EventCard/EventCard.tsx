import type { FC } from "react";
import type { SpecialAppV1EventInfoForList } from "../../../shared/api/generated/model";
import { Link } from "react-router";
import { FormatedDate } from "../../../shared";

export const EventCard: FC<{ eventInfo: SpecialAppV1EventInfoForList }> = ({ eventInfo }) => {
  const { id, title, price, datetime } = eventInfo;

  return (
    <Link to={`${id}`}>
      <div className="cardDiv">
        <p className="text-[18px]">{title}</p>
        <div className="flex justify-between w-full mt-2">
          <p>Дата проведения: </p>
          <FormatedDate date={datetime} />
        </div>
        <div className="flex justify-between w-full mt-2">
          <p>Цена: </p>
          {!price && <p>Бесплатно</p>}
          {price && <p>{price} р.</p>}
        </div>
      </div>
    </Link>
  );
};
