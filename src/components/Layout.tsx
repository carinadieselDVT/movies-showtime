import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div
      style={{ width: "100%", maxWidth: 920, margin: "0 auto", padding: 16 }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
