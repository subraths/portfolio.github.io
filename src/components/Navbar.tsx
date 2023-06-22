import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="text-[#A6A6A7] font-bold flex justify-end  w-1/4">
        <div className="hidden w-full md:flex justify-between">
          <Nav />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-2xl transition-transform"
          >
            {open ? <RxCross1 /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="flex flex-col items-center gap-4 basis-full">
          <Nav />
        </div>
      )}
    </>
  );
}

const Nav = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-[5px] decoration-[3px] decoration-sky-400 mb-[5px]"
            : "custom-underscore"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-[5px] decoration-[3px] decoration-sky-400 mb-[5px]"
            : "custom-underscore"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-[5px] decoration-[3px] decoration-sky-400 mb-[5px]"
            : "custom-underscore"
        }
      >
        Contact
      </NavLink>
    </>
  );
};
