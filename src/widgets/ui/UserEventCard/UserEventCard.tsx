import type { FC } from "react";
import type { SpecialAppV1UserEventInfoForList } from "../../../shared/api/generated/model";
import { Link } from "react-router";
import { FormatedDate } from "../../../shared";

export const UserEventCard: FC<{ userEventInfo: SpecialAppV1UserEventInfoForList }> = ({
  userEventInfo,
}) => {
  return (
    <Link to={`./${userEventInfo.id}`}>
      <div className="cardDiv">
        <p className="mb-2">{userEventInfo?.title}</p>
        <FormatedDate date={userEventInfo?.datetime} />
      </div>
    </Link>
  );
};
