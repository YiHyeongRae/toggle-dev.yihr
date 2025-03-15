import { create } from "zustand";

export const useLoadingStore = create<{
  isLoading: boolean;
  loadingChange: () => void;
}>((set) => ({
  isLoading: false,
  loadingChange: () => set((state) => ({ isLoading: !state.isLoading })),
}));
