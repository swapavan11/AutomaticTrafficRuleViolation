import Navbar from "../../Components/UI/Navbar";
import Footer from "../../Components/UI/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem-4rem)] px-4 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
