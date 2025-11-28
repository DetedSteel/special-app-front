import type { FC } from "react";
import type { SpecialAppV1GetUserEventsResponse } from "../../../shared/api/generated/model";
import { UserEventCard } from "../../../widgets/ui/UserEventCard/UserEventCard";
import { HeaderWithBackBtn } from "../../../shared";

export const UserEventsList: FC<{ userEvents: SpecialAppV1GetUserEventsResponse | undefined }> = ({
  userEvents,
}) => {
  return (
    <>
      <HeaderWithBackBtn text="Ваши записи" />
      <div className="flex-col-gap">
        {userEvents?.userEvents?.map((userEvent, _) => (
          <UserEventCard key={userEvent.id} userEventInfo={userEvent} />
        ))}
      </div>
    </>
  );
};
