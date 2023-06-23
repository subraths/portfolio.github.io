import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto text-[#DFDFDF] bg-primary">
      <Header />
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
