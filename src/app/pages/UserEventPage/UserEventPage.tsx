import type { FC } from "react";
import { useParams } from "react-router";
import { useSpecialAppServiceGetUserEventInfo } from "../../../shared/api/generated/query/special-app-service";
import { UserEventInfo } from "../../../widgets/ui";

export const UserEventPage: FC = () => {
  const { id } = useParams();

  const { data } = useSpecialAppServiceGetUserEventInfo(id ?? "");

  return (
    <div>
      <UserEventInfo userEvent={data} />
    </div>
  );
};
