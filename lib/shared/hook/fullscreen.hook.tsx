import { useState } from "react";

export const useFullscreenHook = (elementName: string) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.getElementById(elementName);
    const isFullscreen = document.fullscreenElement;

    if (isFullscreen) {
      setIsFullscreen(false);
      document.exitFullscreen();
    } else {
      setIsFullscreen(true);
      element?.requestFullscreen();
    }
  };

  return { isFullscreen, toggleFullscreen };
};
