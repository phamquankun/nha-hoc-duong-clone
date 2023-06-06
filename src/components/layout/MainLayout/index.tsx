import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

interface Props {}
const MainLayout = (props: Props) => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
