import type { FC } from "react";
import { useCartStore } from "../../../shared/store/cartStore";
import { DatePicker, Textarea } from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useOrderStore } from "../../../shared/store/orderStore";
import { useSpecialAppServiceCreateOrder } from "../../../shared/api/generated/query/special-app-service";
import { useNavigate } from "react-router";
import { HeaderWithBackBtn } from "../../../shared";

export const Cart: FC = () => {
  const { items, changeQuantity, clearCart } = useCartStore();
  const { date, comment, setComment, setDate } = useOrderStore();
  const navigate = useNavigate();

  const { mutateAsync, isPending, isError } = useSpecialAppServiceCreateOrder();

  const handleCreateOrder = async () => {
    await mutateAsync({
      data: {
        completionDate: date!.toDate("+03:00").toISOString(),
        comment: comment,
        items: items.map((e) => ({
          itemId: e.id,
          quantity: e.quantity,
        })),
        orderAmount: items.reduce((p, c) => {
          return c.price ? p + c.price * c.quantity : 0;
        }, 0),
      },
    });
    if (!isError) {
      setDate(null);
      clearCart();
      setComment("");
      navigate("/profile/orders");
    }
  };

  return (
    <div className="w-full flex flex-col justify-between">
      <div>
        <HeaderWithBackBtn text="Ваша корзина" />
        {items.length == 0 && <p>В корзине пока ничего нет</p>}
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-3">
            <p>{item.title}</p>
            <div className="flex flex-row gap-3.5 items-center rounded-full bg-light-beige p-2">
              <button
                onClick={() => {
                  if (item) changeQuantity(item.id ?? "", -1);
                }}
                className="roundButton"
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item) changeQuantity(item.id ?? "", 1);
                }}
                className="roundButton"
              >
                +
              </button>
            </div>
          </div>
        ))}
        <DatePicker
          value={date}
          onChange={setDate}
          minValue={today(getLocalTimeZone()).add({ days: 2 })}
          className="mb-3"
        />
        <Textarea
          classNames={{ input: "border-black" }}
          value={comment}
          onValueChange={setComment}
          className="mb-3"
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleCreateOrder}
          className="bg-main-green p-3 rounded-2xl disabled:bg-light-green"
          disabled={isPending || !date || !items.length}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};
