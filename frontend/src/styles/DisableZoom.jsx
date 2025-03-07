import { useEffect } from "react";

const DisableZoom = () => {
  useEffect(() => {
    const disableZoom = (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", disableZoom, { passive: false });
    document.addEventListener("keydown", disableZoom, { passive: false });

    return () => {
      document.removeEventListener("wheel", disableZoom);
      document.removeEventListener("keydown", disableZoom);
    };
  }, []);

  return null;
};

export default DisableZoom;
