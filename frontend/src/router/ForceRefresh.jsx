import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ForceRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    window.location.reload();
  }, [location.pathname]); // ✅ Refresh on route change

  return null;
};

export default ForceRefresh;
