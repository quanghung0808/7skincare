import { Outlet } from "react-router-dom";
export default function PublicRouter() {
  // const { isAuthenticated } = useAppSelector(state => state.auth);

  // const navigateRouter = isAuthenticated ? "/document" : "/login";

  // return isAuthenticated ? <Navigate to={navigateRouter} /> : <Outlet />;
  return <Outlet />;
}
