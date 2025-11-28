import type { FC } from "react";
import type { SpecialAppV1GetEventsResponse } from "../../../shared/api/generated/model";
import { EventCard } from "../../../widgets/ui/EventCard/EventCard";
import { HeaderWithBackBtn } from "../../../shared";

export const EventsList: FC<{ events: SpecialAppV1GetEventsResponse | undefined }> = ({
  events,
}) => {
  return (
    <div>
      <HeaderWithBackBtn text="Мероприятия" />
      <div className="flex-col-gap">
        {events?.events?.map((event, _) => (
          <EventCard key={event.id} eventInfo={event} />
        ))}
      </div>
    </div>
  );
};
// компонент для списка карточек с событиями
