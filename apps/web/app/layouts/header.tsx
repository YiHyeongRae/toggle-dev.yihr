"use client";
import { usePathname } from "next/navigation";
import React from "react";
function Header() {
  const path = usePathname();

  return (
    <header
      className="px-[20px] w-full text-center text-[15px] fixed top-0 left-0 py-[15.5px] font-medium leading-[1.4] z-1"
      style={{ color: path === "/" ? "#1a1a1a" : "#fff" }}
    >
      이형래
    </header>
  );
}

export default Header;
