import React, { useState } from "react";
import useImgStore from "../../imgStore";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { XIcon, Maximize2, Minimize2 } from "lucide-react";

const ImgViewer = () => {
  const { showImgDialog, imgURL, setShowImgDialog } = useImgStore();
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Dialog open={showImgDialog} onOpenChange={setShowImgDialog}>
      <DialogContent
        className={`border-0 bg-black/90 shadow-2xl p-0 ${
          isFullscreen
            ? "max-w-none w-screen h-screen rounded-none"
            : "max-w-4xl w-[95vw] h-auto rounded-xl"
        }`}
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10" />

          {/* Image container */}
          <div
            className={`relative flex items-center justify-center overflow-auto ${
              isFullscreen ? "w-full h-screen" : "w-full max-h-[80vh] py-8"
            }`}
          >
            {imgURL && (
              <img
                src={imgURL}
                alt="Image Viewer"
                className={`object-contain drop-shadow-2xl transition-transform duration-300 ${
                  isFullscreen
                    ? "max-h-screen max-w-screen"
                    : "max-h-[75vh] max-w-full"
                }`}
              />
            )}
          </div>

          {/* Close button */}
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-white/15 hover:bg-white/25 p-2.5 transition-all duration-200 backdrop-blur-sm hover:scale-110 md:top-6 md:right-6">
            <XIcon className="w-5 h-5 text-white md:w-6 md:h-6" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Fullscreen toggle button */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="absolute top-4 right-16 z-50 rounded-full bg-white/15 hover:bg-white/25 p-2.5 transition-all duration-200 backdrop-blur-sm hover:scale-110 md:top-6 md:right-20"
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5 text-white md:w-6 md:h-6" />
            ) : (
              <Maximize2 className="w-5 h-5 text-white md:w-6 md:h-6" />
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImgViewer;
