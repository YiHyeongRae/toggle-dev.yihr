"use client";
import { useRouter } from "next/navigation";
import FixedBottomButton from "./components/FixedBottomButton";
import api from "./lib/axios/api";
import { useLoadingStore } from "./lib/zustand/loading";
import { PhotoStore, usePhotoStore } from "./lib/zustand/photo";
import useDebounce from "./utils/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
  const loadingChange = useLoadingStore((state) => state.loadingChange);
  const router = useRouter();
  const setPhoto = usePhotoStore((state: PhotoStore) => state.setPhoto);
  const photo = usePhotoStore((state: PhotoStore) => state.photo);

  const { refetch } = useQuery({
    queryKey: ["photo"],
    queryFn: async () => {
      loadingChange();
      const res = await api.get("https://picsum.photos/id/0/info");
      setPhoto(res.data);
      loadingChange();
      router.push("/result", { scroll: false });
      return res.data;
    },
    enabled: false,
  });

  useEffect(() => {
    if (photo.id !== "") {
      router.push("/result", { scroll: false });
    }
  }, [photo]);
  return (
    <div className="max-w-[335px] mx-auto  flex justify-center items-center h-[calc(100%-180px)] ">
      <div className="text-[28px] leading-[1.4] text-[#111111] text-center font-semibold">
        <p>안녕하세요</p>
        <p>이형래 입니다.</p>
      </div>
      <FixedBottomButton submit={useDebounce(refetch, 200)} />
    </div>
  );
}
