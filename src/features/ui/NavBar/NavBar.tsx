import type { FC } from "react";
import { Link } from "react-router";

export const NavBar: FC = () => {
  return (
    <div>
      <Link to="/">Главная</Link>
      <Link to="/profile">Профиль</Link>
    </div>
  );
};
