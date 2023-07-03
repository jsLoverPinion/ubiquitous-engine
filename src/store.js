import { create } from "zustand";

const useStore = create((set) => ({
  loginde: false,
  setLoginde: (params) => set((state) => ({ loginde: params })),
  userData: null,
  setUserData: (params) => set((state) => ({ userData: params })),
}));

export { useStore };
