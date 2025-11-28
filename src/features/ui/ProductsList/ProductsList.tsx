import type { FC } from "react";
import type { SpecialAppV1GetItemsResponse } from "../../../shared/api/generated/model";
import { ProductCard } from "../../../widgets/ui";
import { HeaderWithBackBtn } from "../../../shared";

export const ProductsList: FC<{ items: SpecialAppV1GetItemsResponse | undefined }> = ({
  items,
}) => {
  return (
    <div>
      <HeaderWithBackBtn text="Выпечка" />
      <div className="flex-col-gap">
        {items?.items?.map((item, _) => (
          <ProductCard key={item.id} itemInfo={item} />
        ))}
      </div>
    </div>
  );
};
// компонент для списка карточек с товарами
