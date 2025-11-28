import { useEffect, useState, type FC } from "react";
import type { SpecialAppV1GetItemInfoResponse } from "../../../shared/api/generated/model";
import { useCartStore } from "../../../shared/store/cartStore";
import { HeaderWithBackBtn } from "../../../shared";
import { PictureCarousel } from "../PictureCarousel/PictureCarousel";

export const ProductInfo: FC<{ item: SpecialAppV1GetItemInfoResponse | undefined }> = ({
  item,
}) => {
  const { items, addItem, changeQuantity } = useCartStore();

  const [quantity, setQuantity] = useState(0);
  const [hasItem, setHasItem] = useState(false);

  useEffect(() => {
    if (
      items?.find((e) => {
        if (item?.id === e.id) {
          setQuantity(e.quantity);
          return true;
        }
        return false;
      })
    ) {
      setHasItem(true);
    }
  }, [items]);

  return (
    <div className="infoCard overflow-y-auto w-full flex flex-col justify-between">
      <div className="w-full">
        <HeaderWithBackBtn text={item?.title} />
        <PictureCarousel pictures={item?.pictures} />
        <div className="w-full cardDiv">
          <div className="mb-0.5 flex justify-between">
            <p>{item?.title}</p>
            <p>{item?.price} </p>
          </div>

          <p className="text-justify">{item?.description}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full flex justify-between">
          {!hasItem && (
            <button
              onClick={() => {
                if (item) addItem({ ...item, quantity: 1 });
              }}
              className="bg-main-green p-4 rounded-full text-white"
            >
              Добавить в корзину
            </button>
          )}
          {hasItem && (
            <div className="flex flex-row gap-1.5flex w-32 justify-between bg-light-beige p-2 rounded-full items-center">
              <button
                onClick={() => {
                  if (item) changeQuantity(item.id ?? "", -1);
                }}
                className="roundButton"
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => {
                  if (item) changeQuantity(item.id ?? "", 1);
                }}
                className="roundButton"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
