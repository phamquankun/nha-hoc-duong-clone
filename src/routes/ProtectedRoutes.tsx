import MainLayout from "@/components/layout/MainLayout";
import { slugs } from "@/constants/slugs";
import DentalRecord from "@/pages/DentalRecord/routes";
import {
  PatientCreate,
  PatientDetail,
  PatientList,
} from "@/pages/Patient/routes";
import PowerBI from "@/pages/PowerBI";

import { Outlet, useRoutes } from "react-router-dom";

const ProtectedRoutes = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const element = useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: slugs.patients,
          element: <PatientList />,
        },
        {
          path: "power-bi",
          element: <PowerBI />,
        },
        {
          path: slugs.patients,
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <PatientList />,
            },
            {
              path: slugs.patientCreate,
              element: <PatientCreate />,
            },

            {
              path: slugs.patientDetail,
              element: <PatientDetail />,
            },
          ],
        },
        {
          path: slugs.dentalRecord,
          element: <DentalRecord />,
        },
      ],
    },
  ]);
  return element;
};

export { ProtectedRoutes };
