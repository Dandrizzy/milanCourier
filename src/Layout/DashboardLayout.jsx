import { Outlet } from "react-router-dom";
import DashBoardNav from "../ui/DashBoardNav";

const DashboardLayout = () => {
 return (
  <>
   <DashBoardNav />
   <Outlet />
  </>
 );
};

export default DashboardLayout;