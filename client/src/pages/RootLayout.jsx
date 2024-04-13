import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const RootLayout = () => {
  return (
    <main className="w-full h-screen bg-backgroundGreen p-7 space-y-12">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
