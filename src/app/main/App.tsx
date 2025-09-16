import type { FC } from "react";
import { Outlet } from "react-router";
import { NavBar } from "../../features";

export const App: FC = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <NavBar />
    </>
  );
};
