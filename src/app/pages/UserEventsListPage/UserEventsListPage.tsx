import type { FC } from "react";
import { useSpecialAppServiceGetUserEvents } from "../../../shared/api/generated/query/special-app-service";
import { UserEventsList } from "../../../features/ui/UserEventsList/UserEventsList";
export const UserEventsListPage: FC = () => {
  const { data } = useSpecialAppServiceGetUserEvents({ perPage: 100 });

  return (
    <div>
      <UserEventsList userEvents={data} />
    </div>
  );
};
