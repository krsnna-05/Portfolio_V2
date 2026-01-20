import { create } from "zustand";

type NavigationStore = {
  state: "home" | "aboutme" | "exp" | "projects";
  setState: (newState: "home" | "aboutme" | "exp" | "projects") => void;
};

const useNavigationStore = create<NavigationStore>((set) => ({
  state: "home",
  setState: (newState) => set({ state: newState }),
}));

export default useNavigationStore;
