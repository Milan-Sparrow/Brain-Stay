import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(true);
  const links = [
    "Home",
    "Menu",
    "Facility",
    "Gallery",
    "Catering",
    "Contact Us",
  ];

  return (
    <header className="m-auto sticky top-0 z-50 text-black bg-white shadow-lg">
      <nav className="flex  items-center justify-between w-11/12 xl:w-10/12 m-auto h-20 2xl:h-24 text-xl ">
        <div className="font-bold text-3xl">Brain Stay</div>
        <div>
          <div className="hidden lg:flex space-x-5 xl:space-x-8 items-center">
            {links.map((item) => (
              <p key={item} className="cursor-pointer border-red-500">
                {item}
              </p>
            ))}
            <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 lg:py-3 rounded-sm text-xl">
              Book a Banquet
            </button>
          </div>
          <div onClick={() => setMenuClick(!menuClick)}>
            {menuClick ? (
              <HiMenu className="lg:hidden text-4xl cursor-pointer" />
            ) : (
              <HiX className="lg:hidden text-4xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${
          menuClick ? "hidden" : ""
        } lg:hidden text-center space-y-3 text-xl font-bold`}
      >
        {links.map((item) => (
          <p
            key={item}
            className="cursor-pointer hover:bg-red-500 py-2 last:pb-3 hover:text-white"
          >
            {item}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
