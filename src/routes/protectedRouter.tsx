import { Outlet } from "react-router-dom";
export default function ProtectedRouter() {
  // const location = useLocation();

  // const { isAuthenticated } = useAppSelector(state => state.auth);

  // return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} state={{ from: location }} />;
  return <Outlet />;
}
