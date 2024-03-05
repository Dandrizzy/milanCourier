import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const AppLayout = () => {
 return (
  <>
   <Header />
   <Nav />
   <Outlet />
   <Footer />
  </>
 );
};

export default AppLayout;