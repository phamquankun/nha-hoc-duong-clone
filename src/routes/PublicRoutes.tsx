import Login from "@/pages/Login";
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

interface IPublicRoutes {
  setAuth?: React.Dispatch<React.SetStateAction<boolean>>;
}
const PublicRoutes = ({
  setAuth,
}: IPublicRoutes): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const element = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ]);
  return element;
};

export { PublicRoutes };
