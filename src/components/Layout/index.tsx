import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex h-full flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
