import { Buttons } from "@repo/ui/button/button";
import React from "react";
import { useLoadingStore } from "../../lib/zustand/loading";

function index({ submit }: { submit: Function }) {
  const loading = useLoadingStore((state) => state.isLoading);

  return (
    <div className="w-full fixed bottom-0 left-0 py-[40px] px-[20px] flex justify-center">
      <Buttons className="bg-black" onClick={() => submit}>
        {loading ? (
          <div className="inline-block w-[24px] h-[24px] border-4 border-[#e8ebed80] border-t-[#fff] rounded-full animate-spin"></div>
        ) : (
          "다음"
        )}
      </Buttons>
    </div>
  );
}

export default index;
