import { create } from "zustand";
import { persist } from "zustand/middleware";

const StorageKey = "toggle-photo";

export interface PhotoTypes {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}
export interface PhotoStore {
  photo: PhotoTypes;
  setPhoto: (state: PhotoTypes) => void;
}

export const usePhotoStore = create(
  persist<PhotoStore>(
    (set) => ({
      photo: {
        author: "",
        download_url: "",
        height: 0,
        id: "",
        url: "",
        width: 0,
      },

      setPhoto: (photo: PhotoTypes) => {
        set({ photo });
      },
    }),
    {
      name: StorageKey,
    }
  )
) as any;
