import { create } from "zustand";

type NavigationStore = {
  state: "aboutme" | "exp" | "projects";
  setState: (newState: "aboutme" | "exp" | "projects") => void;
};

const useNavigationStore = create<NavigationStore>((set) => ({
  state: "aboutme",
  setState: (newState) => set({ state: newState }),
}));

export default useNavigationStore;
