import type { FC } from "react";
import { ProductCard } from "../../../widgets/ui";

export const ProductsList: FC = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index}>
          <ProductCard />
        </div>
      ))}
    </div>
  );
};
// компонент для списка карточек с товарами
