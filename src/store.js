import { create } from "zustand";

const useStore = create((set) => ({
  loginde: false,
  setLoginde: (params) => set((state) => ({ loginde: params })),
}));

export { useStore };
