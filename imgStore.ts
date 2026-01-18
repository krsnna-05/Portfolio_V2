import { create } from "zustand";

type ImgStore = {
  imgURL: string;
  setImgURL: (newURL: string) => void;
  showImgDialog: boolean;
  setShowImgDialog: (show: boolean) => void;
};

const useImgStore = create<ImgStore>((set) => ({
  imgURL: "",
  setImgURL: (newURL: string) => set({ imgURL: newURL }),
  showImgDialog: false,
  setShowImgDialog: (show: boolean) => set({ showImgDialog: show }),
}));

export default useImgStore;
