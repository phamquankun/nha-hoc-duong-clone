import { useState } from "react";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";

interface Props {}
const AppRoutes = (props: Props) => {
  const [auth, setAuth] = useState(true);
  return auth ? <ProtectedRoutes /> : <PublicRoutes setAuth={setAuth} />;
};
export { AppRoutes };
