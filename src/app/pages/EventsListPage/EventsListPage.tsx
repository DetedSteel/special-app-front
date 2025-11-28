import type { FC } from "react";
import { useSpecialAppServiceGetEvents } from "../../../shared/api/generated/query/special-app-service";
import { EventsList } from "../../../features/ui/EventsList/EventsList";

export const EventsListPage: FC = () => {
  const { data } = useSpecialAppServiceGetEvents({ perPage: 100 });
  return (
    <>
      <EventsList events={data} />
    </>
  );
};
