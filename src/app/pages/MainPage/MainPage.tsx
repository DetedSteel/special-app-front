import type { FC } from "react";
import { Link } from "react-router";
import { useSpecialAppServiceGetItems } from "../../../shared/api/generated/query/special-app-service";

export const MainPage: FC = () => {
  const { data } = useSpecialAppServiceGetItems();

  return (
    <div>
      {data?.items?.map((e) => (
        <Link to={e.id ?? ""}>{e.title}</Link>
      ))}
      Main page
    </div>
  );
};
