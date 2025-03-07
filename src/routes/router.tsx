import { Route, Routes } from "react-router-dom";
import PublicRouter from "./publicRouter";
import { publicRoutes } from "./config/publicRoutes";
import GuestLayout from "../components/guest-layout/GuestLayout";

function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
        <Route element={<GuestLayout />}>
          {publicRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Route>
      </Route>

      <Route path="*" element={<GuestLayout />} />
    </Routes>
  );
}

export default AppRouter;
