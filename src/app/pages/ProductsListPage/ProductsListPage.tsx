import type { FC } from "react";
import { useSpecialAppServiceGetItems } from "../../../shared/api/generated/query/special-app-service";
import { ProductsList } from "../../../features/ui/ProductsList/ProductsList";
import { HeaderWithBackBtn } from "../../../shared";

export const ProductsListPage: FC = () => {
  const { data } = useSpecialAppServiceGetItems({ perPage: 100 });

  return (
    <>
      <ProductsList items={data} />
    </>
  );
};
