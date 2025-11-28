import { useState, type FC } from "react";

export const CountingBlock: FC = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex w-32 justify-between bg-light-beige p-2 rounded-full items-center">
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="roundButton"
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="roundButton"
      >
        +
      </button>
    </div>
  );
};
