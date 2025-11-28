import type { FC } from "react";
import { Link } from "react-router";
import { HeaderWithBackBtn } from "../../../shared";

export const ProfileInfo: FC = () => {
  return (
    <div className="w-full">
      <HeaderWithBackBtn text="Ваш профиль" />
      <div className="flex-col-gap w-full">
        <Link to="./orders" className="cardDiv flex w-full justify-center mt-8">
          Мои заказы
        </Link>
        <Link to="./events" className="cardDiv flex w-full justify-center mt-8">
          Мои записи
        </Link>
      </div>
    </div>
  );
};
