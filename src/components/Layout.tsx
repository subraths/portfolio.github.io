import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main className="bg-[#202122] px-8 text-[#DFDFDF] h-screen">
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Outlet />
        <div className="">
          <Footer />
        </div>
      </div>
    </main>
  );
}
