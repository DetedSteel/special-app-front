import type { FC } from "react";
import { useSpecialAppServiceGetEventInfo } from "../../../shared/api/generated/query/special-app-service";
import { useParams } from "react-router";
import { EventInfo } from "../../../widgets/ui";
1;
export const EventPage: FC = () => {
  const { id } = useParams();

  const { data } = useSpecialAppServiceGetEventInfo(id ?? "");

  return (
    <>
      <EventInfo event={data} />
    </>
  );
};
