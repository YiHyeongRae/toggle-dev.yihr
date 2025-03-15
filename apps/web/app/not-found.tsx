"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function NotFound() {
  const router = useRouter();
  const [timer, setTimer] = useState<number>(3);
  useEffect(() => {
    const dec = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(dec);
      router.replace("/");
    }
  }, [timer]);
  return (
    <div className="w-full h-full flex-col fixed left-0 top-0 flex justify-center items-center">
      <p>404 - Page Not Found</p>
      <p>
        Will Routing To Home{" "}
        <span className="text-2xl text-red-400">{timer}</span> Seconds
      </p>
    </div>
  );
}

export default NotFound;
