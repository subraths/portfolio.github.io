import { useState } from "react";
import { NavLink } from "react-router-dom";

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
          <button onClick={toggleNavbar}>X</button>
        </div>
      </nav>
      {open && (
        <div className="flex flex-col items-center basis-full">
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
            ? "text-white underline underline-offset-[5px] decoration-[3px] decoration-sky-400"
            : "custom-underscore"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-[5px] decoration-[3px] decoration-sky-400"
            : "custom-underscore"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-[5px] decoration-[3px] decoration-sky-400"
            : "custom-underscore"
        }
      >
        Contact
      </NavLink>
    </>
  );
};
