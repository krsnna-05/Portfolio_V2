import React, { useState } from "react";
import useImgStore from "../../imgStore";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { XIcon, Maximize2, Minimize2 } from "lucide-react";

const ImgViewer = () => {
  const { showImgDialog, imgURL, setShowImgDialog } = useImgStore();
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Dialog open={showImgDialog} onOpenChange={setShowImgDialog}>
      <DialogContent>
        {isFullscreen ? (
          // Fullscreen layout
          <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10" />

            {/* Image */}
            {imgURL && (
              <img
                src={imgURL}
                alt="Image Viewer"
                className="relative z-20 max-h-[90vh] max-w-[95vw] object-contain drop-shadow-2xl"
              />
            )}
          </div>
        ) : (
          // Normal layout
          <div className="flex flex-col items-center justify-center w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10" />

            {/* Image container */}
            <div className="relative z-20 flex items-center justify-center w-full max-h-[80vh] py-8">
              {imgURL && (
                <img
                  src={imgURL}
                  alt="Image Viewer"
                  className="max-h-[75vh] max-w-full object-contain drop-shadow-2xl transition-transform duration-300"
                />
              )}
            </div>

            {/* Controls */}
            <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-white/15 hover:bg-white/25 p-2.5 transition-all duration-200 backdrop-blur-sm hover:scale-110 md:top-6 md:right-6">
              <XIcon className="w-5 h-5 text-white md:w-6 md:h-6" />
              <span className="sr-only">Close</span>
            </DialogClose>

            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-4 right-16 z-50 rounded-full bg-white/15 hover:bg-white/25 p-2.5 transition-all duration-200 backdrop-blur-sm hover:scale-110 md:top-6 md:right-20"
              title="Enter fullscreen"
            >
              <Maximize2 className="w-5 h-5 text-white md:w-6 md:h-6" />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImgViewer;
