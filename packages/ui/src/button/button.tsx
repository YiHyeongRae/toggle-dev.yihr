"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: Function;
}

export const Buttons = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${className} flex items-center w-full justify-center max-w-[335px] p-[12px] text-white rounded-[12px] hover:opacity-80 active:opacity-80`}
      onClick={onClick && onClick()}
    >
      {children}
    </button>
  );
};
