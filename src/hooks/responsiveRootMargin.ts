import { useState, useEffect } from "react";

const useResponsiveRootMargin = () => {
  const [rootMargin, setRootMargin] = useState("-100px 0px");

  useEffect(() => {
    const updateRootMargin = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setRootMargin("-50px 0px");
      } else {
        setRootMargin("-100px 0px");
      }
    };

    window.addEventListener("resize", updateRootMargin);
    updateRootMargin(); // Initialize on mount

    return () => window.removeEventListener("resize", updateRootMargin);
  }, []);

  return rootMargin;
};

export default useResponsiveRootMargin;
