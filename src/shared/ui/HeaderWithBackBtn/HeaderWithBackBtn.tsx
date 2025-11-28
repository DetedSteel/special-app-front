import type { FC } from "react";
import { useNavigate } from "react-router";

interface IHeaderWithBackBtnProps {
  text?: string;
}

export const HeaderWithBackBtn: FC<IHeaderWithBackBtnProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h- my-4 flex items-center justify-center text-lg">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="absolute left-0 roundButton"
      >
        <div className="h-2 w-2 relative left-[1.4px] transform-[rotate(45deg)] border-b-2 border-l-2 border-near-black"></div>
      </button>
      <p className="text-center w-[calc(100%-100px)]">{text}</p>
    </div>
  );
};
