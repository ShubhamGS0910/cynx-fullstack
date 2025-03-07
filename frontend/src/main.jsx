import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import AppRoutes from "./router/AppRoutes.jsx";
import ScrollToTop from "./styles/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/"> {/* ✅ Wrap App inside BrowserRouter */}
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
