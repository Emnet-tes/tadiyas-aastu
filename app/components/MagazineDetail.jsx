"use client";

import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaExpand,
  FaSearchMinus,
  FaSearchPlus,
} from "react-icons/fa";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import data from "@/public/data.json";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef(({ number, children }, ref) => {
  return (
    <div className="items-center flex justify-center" ref={ref}>
      <div className="">{children}</div>
      <p className="text-center text-sm text-gray-600 mt-2">Page {number}</p>
    </div>
  );
});
Pages.displayName = "Pages";

const MagazineDetail = () => {
  const { id } = useParams();
  const flipBook = useRef(null);
  const containerRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1); // Zoom level
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 400, height: 575 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const isDesktopView = window.innerWidth >= 1024; // lg breakpoint
      setIsDesktop(isDesktopView);
      if (isDesktopView) {
        setDimensions({ width: 400, height: 555 });
      } else if (window.innerWidth < 640) {
        setDimensions({ width: 300, height: 430 });
      } else {
        setDimensions({ width: 400, height: 555 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setCurrentPage(0);
  };

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const handleNextPage = () => flipBook.current?.pageFlip().flipNext();
  const handlePrevPage = () => flipBook.current?.pageFlip().flipPrev();

  // Zoom Controls
  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

  // Full-Screen Toggle
  const toggleFullScreen = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen();}
else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNextPage();
      if (e.key === "ArrowLeft") handlePrevPage();
      if (e.key === "Escape" && isFullScreen) toggleFullScreen();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFullScreen]);
  
  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center min-h-screen bg-gray-400"
    >
      {/* Controls */}
      <div className="flex space-x-4  mt-12 justify-end w-full">
        <button
          onClick={zoomIn}
          className="p-2 bg-white text-black shadow rounded-full hover:bg-blue-500 hover:text-white"
        >
          <FaSearchPlus size={18} />
        </button>
        <button
          onClick={zoomOut}
          className="p-2 bg-white text-black shadow rounded-full hover:bg-blue-500 hover:text-white"
        >
          <FaSearchMinus size={18} />
        </button>
        <button
          onClick={toggleFullScreen}
          className="p-2 bg-white text-black shadow rounded-full hover:bg-blue-500 hover:text-white"
        >
          <FaExpand size={18} />
        </button>
      </div>

      <div className="relative w-full flex justify-center items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="absolute left-3 lg:left-10 z-10 p-2 bg-white text-gray-700 rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <GrPrevious size={12} />
        </button>

        {/* Scrollable container for zooming */}
        <div className="relative w-full flex justify-center items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="absolute left-3 lg:left-10 z-10 p-2 bg-white text-gray-700 rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <GrPrevious size={12} />
          </button>

          {/* Wrapping the flipbook inside a scrollable container */}
          <div
            className="relative overflow-auto flex justify-center items-center w-full max-w-6xl"
            style={{ height: "80vh" }} // Ensures it stays within the viewport
          >
            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center", // Keeps zooming centered
                transition: "transform 0.3s ease-in-out", // Smooth zoom effect
                whiteSpace: "nowrap", // Prevents breaking apart
              }}
            >
              <Document
                file={`/${data.magazines[id - 1].file}.pdf`}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {numPages ? (
                  <div className="p-4 rounded-lg">
                    <HTMLFlipBook
                      width={dimensions.width}
                      height={dimensions.height}
                      onFlip={onFlip}
                      ref={flipBook}
                      showCover={true}
                      maxShadowOpacity={0.5}
                      flippingTime={1000}
                      usePortrait={!isDesktop}
                      startPage={0}
                      size="stretch"
                      minWidth={dimensions.width}
                      maxWidth={dimensions.width * 2}
                      drawShadow={true}
                    >
                      {[...Array(numPages)].map((_, i) => (
                        <Pages key={i} number={i + 1}>
                          <Page
                            pageNumber={i + 1}
                            width={dimensions.width}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            loading={
                              <div className="flex justify-center items-center h-full">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                              </div>
                            }
                          />
                        </Pages>
                      ))}
                    </HTMLFlipBook>
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                  </div>
                )}
              </Document>
            </div>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === numPages - 1}
            className="absolute right-3 lg:right-10 z-10 p-2 bg-white text-gray-700 rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <GrFormNext size={20} />
          </button>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === numPages - 1}
          className="absolute right-3 lg:right-10 z-10 p-2 bg-white text-gray-700 rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <GrFormNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default MagazineDetail;
