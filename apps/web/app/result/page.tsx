"use client";
import React, { useEffect, useState } from "react";
import Image, { ImageLoaderProps } from "next/image";
import { PhotoStore, usePhotoStore } from "../lib/zustand/photo";
import { useRouter } from "next/navigation";
import useDebounce from "../utils/useDebounce";
import { Buttons } from "@repo/ui/button/button";
import { useQueryClient } from "@tanstack/react-query";
function Result() {
  const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const photo = usePhotoStore((state: PhotoStore) => state.photo);

  const mappingKeys = [
    ["id", "author"],
    ["width", "height"],
    ["url", "download_url"],
  ];

  const router = useRouter();

  const queryClient = useQueryClient();
  const queryState = queryClient.getQueryState(["photo"]); // queryKey를 지정

  const [imageOnLoaded, setImageOnLoaded] = useState(false);

  useEffect(() => {
    if (
      queryState === undefined &&
      localStorage.getItem("toggle-photo") === null
    ) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, []);

  return (
    <div className="pt-[52px] flex justify-center items-center px-[20px] bg-custom fixed left-0 top-0 w-full h-full overflow-auto max-[1279px]:block">
      <div className="flex gap-[40px] items-center flex-row max-[1279px]:flex-col">
        <div className="flex-[50%] w-full min-h-30 mt-[0px] rounded-[24px] overflow-hidden max-[1279px]:mt-[40px]">
          {!imageOnLoaded && (
            <div className="animate-skeleton h-70 min-w-[700px] rounded-md max-[1279px]:w-full"></div>
          )}
          {photo.download_url && (
            <Image
              src={photo.download_url}
              loader={imageLoader}
              width={0}
              height={0}
              alt={photo.author}
              className="rounded-[24px]"
              style={{ width: "100%", height: "auto" }}
              priority
              onLoadingComplete={() => setImageOnLoaded(true)}
            />
          )}
        </div>
        <div className="flex-[50%] flex gap-[12px] flex-col items-center justify-center max-[1279px]:w-full">
          {mappingKeys.map((item) => {
            return (
              <div
                className="flex flex-row w-full gap-[16px] bg-white rounded-[16px] p-[20px] text-[#111111] max-[767px]:flex-col"
                key={item.toString()}
                style={{
                  flexDirection: !item.includes("url") ? "row" : "column",
                }}
              >
                {item.map((details) => {
                  return (
                    <div className="flex-[50%]" key={details.toString()}>
                      <div>{details}</div>
                      {!photo[details] ? (
                        <div className="animate-skeleton h-6 w-full rounded-md"></div>
                      ) : (
                        <div className="opacity-50 break-words">
                          {photo[details]}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <Buttons
            className="bg-black !max-w-[154px] max-[767px]:!max-w-none"
            onClick={() => useDebounce(() => router.push("/"), 200)}
          >
            이전
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default Result;
