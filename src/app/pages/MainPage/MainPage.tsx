import type { FC } from "react";
import { useSpecialAppServiceGetItems } from "../../../shared/generated/query/special-app-service";
import { Link } from "react-router";

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
