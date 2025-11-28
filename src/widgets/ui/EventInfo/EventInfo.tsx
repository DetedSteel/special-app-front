import type { FC } from "react";
import type { SpecialAppV1GetEventInfoResponse } from "../../../shared/api/generated/model";
import { CountingBlock, FormatedDate, HeaderWithBackBtn } from "../../../shared";

export const EventInfo: FC<{ event: SpecialAppV1GetEventInfoResponse | undefined }> = ({
  event,
}) => {
  return (
    <div className="infoCard overflow-y-auto flex flex-col justify-between">
      <div className="w-full">
        <HeaderWithBackBtn text={event?.title} />
        <div className="w-full cardDiv">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p>Дата проведения</p>
              <FormatedDate date={event?.datetime} />
            </div>
            <div>
              <p>Цена</p>
              {!event?.price && <p>Бесплатно</p>}
              {event?.price && <p>{event?.price} р.</p>}
            </div>
          </div>
          <p className="mb-3">
            Мест занято: {event?.occupiedSeats}/{event?.totalSeats}
          </p>
          <p className="mb-0.5">Чем будем заниматься:</p>
          <p className="text-justify">{event?.description}</p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <CountingBlock />
        <button className="rounded-full bg-main-green p-4 text-white">Зарегистрироваться</button>
      </div>
    </div>
  );
};
