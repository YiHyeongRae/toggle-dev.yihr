export interface ButtonProps {
  children: string;
  className: string;
}

import { Buttons } from "@repo/ui/button/button";

export const Button = ({ children, className }: ButtonProps) => {
  // @repo/ui/button/button 을 재활용시 상태별로 스토리북에서 보기 난감,,
  return (
    <button
      className={`${className} bg-[#111111] font-[Pretendard-Semibold] flex items-center w-full justify-center max-w-[335px] p-[12px] text-white rounded-[12px] `}
    >
      {children}
    </button>
  );
};
