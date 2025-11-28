import type { FC } from "react";
import type { SpecialAppV1GetUserEventInfoResponse } from "../../../shared/api/generated/model";
import { Link } from "react-router";
import { FormatedDate, HeaderWithBackBtn } from "../../../shared";

export const UserEventInfo: FC<{ userEvent: SpecialAppV1GetUserEventInfoResponse | undefined }> = ({
  userEvent,
}) => {
  return (
    <div>
      <HeaderWithBackBtn text="Ваша запись" />
      <Link to={`/events/${userEvent?.eventId}`}>
        <div className="cardDiv">
          <p className="text-[18px] mb-2">{userEvent?.title}</p>
          <div className="flex justify-between mb-1.5">
            <p>Дата проведения:</p>
            <FormatedDate date={userEvent?.datetime} />
          </div>
          <div className="flex justify-between">
            <p>Гостей записано:</p>
            <p>{userEvent?.numberOfGuests}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
