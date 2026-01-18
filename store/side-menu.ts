import { create } from "zustand";

interface ISideMenuState {
  isActive: boolean;
  toggle: () => void;
}

const useSideMenuStore = create<ISideMenuState>()((set) => ({
  isActive: false,
  toggle: () => set((state) => ({ isActive: !state.isActive })),
}));


export default useSideMenuStore;