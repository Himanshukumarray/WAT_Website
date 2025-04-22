import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 👈 Automatically gives current path

  useEffect(() => {
    window.scrollTo(0, 0); // ⬆️ Scrolls to top when pathname changes
  }, [pathname]); // 👈 Effect runs every time pathname changes

  return null;
};

export default ScrollToTop;
