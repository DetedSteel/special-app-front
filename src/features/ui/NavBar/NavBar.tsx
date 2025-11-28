import type { FC } from "react";
import { Link } from "react-router";
import { Croissant, CalendarHeart, ShoppingBasket, UserCircle } from "lucide-react";

export const NavBar: FC = () => {
  return (
    <div className="absolute left-0 bottom-3 flex justify-center h-[60px] w-full mb-3">
      <nav className="w-[calc(100svw-48px)] flex gap-16 justify-center items-center h-full bg-div rounded-xl">
        {/* <Link to="/">Главная</Link> */}
        <Link to="/products">
          <Croissant size={28} />
        </Link>
        <Link to="/events">
          <CalendarHeart size={28} />
        </Link>
        <Link to="/cart">
          <ShoppingBasket size={28} />
        </Link>
        <Link to="/profile">
          <UserCircle size={28} />
        </Link>
      </nav>
    </div>
  );
};
