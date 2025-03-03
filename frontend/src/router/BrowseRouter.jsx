import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../router/AppRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
