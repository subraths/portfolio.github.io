import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-4 sticky top-0 z-10 flex justify-between items-center flex-wrap">
      <Link
        to="/"
        className="h-10 w-10 rounded-full bg-yellow-600 inline-block bg-gradient-to-l from-pink-300 via-sky-700 p-1 md:h-16 md:w-16"
      >
        <div className="w-full h-full bg-[#202122] rounded-full"></div>
      </Link>
      <Navbar />
    </header>
  );
}
