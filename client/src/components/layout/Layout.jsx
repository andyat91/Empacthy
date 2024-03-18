import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
