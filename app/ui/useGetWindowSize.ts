"use client";
import { useEffect, useState } from "react";

export default function useGetWindowSize() {
  const getScreenWidth = () => {
    if (typeof window === "undefined") {
      return null;
    }

    return document.querySelector("body")?.clientWidth;
  };

  const [windowState, setWindowState] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = getScreenWidth();

      if (screenWidth == null) return;

      if (screenWidth <= 575) {
        setWindowState(575);
      } else if (screenWidth <= 767) {
        setWindowState(767);
      } else {
        setWindowState(1025);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: windowState === 575,
    isTablet: windowState === 767,
    isDesktop: windowState === 1025,
  };
}
