import type { FC } from "react";
import { useSpecialAppServiceGetOrders } from "../../../shared/api/generated/query/special-app-service";
import { OrdersList } from "../../../features/ui/OrdersList/OrdersList";

export const OrdersListPage: FC = () => {
  const { data } = useSpecialAppServiceGetOrders({ perPage: 100 });

  return (
    <div>
      <OrdersList orders={data} />
    </div>
  );
};
