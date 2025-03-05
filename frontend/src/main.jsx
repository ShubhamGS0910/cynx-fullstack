import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import AppRoutes from "./router/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App inside BrowserRouter */}
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
