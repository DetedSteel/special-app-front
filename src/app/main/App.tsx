import { useEffect, type FC } from "react";
import { Outlet } from "react-router";
import { NavBar } from "../../features";
import {
  useSpecialAppServiceCreateUser,
  useSpecialAppServiceGetUser,
} from "../../shared/api/generated/query/special-app-service";

export const App: FC = () => {
  const { isPending, isError } = useSpecialAppServiceGetUser();

  const {
    mutateAsync,
    isPending: isPendigReg,
    isError: isErrorReg,
    status,
  } = useSpecialAppServiceCreateUser();

  useEffect(() => {
    if (isError) {
      mutateAsync();
    }
  }, [isError]);

  if (isPending || isPendigReg) return <p>Загрузка...</p>;

  if (isErrorReg) return <p>Для использования приложения напишите /start в боте</p>;

  return (
    <>
      <div className="container">
        <Outlet />
      </div>
      <NavBar />
    </>
  );
};
