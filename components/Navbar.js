import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(true);
  return (
    <header className="m-auto sticky top-0 z-50 text-black shadow-lg">
      <nav className="flex  items-center justify-between w-11/12 xl:w-10/12 m-auto h-20 2xl:h-24 text-xl ">
        <div className="font-bold text-3xl">Brain Stay</div>
        <div>
          <div className="hidden lg:flex space-x-5 xl:space-x-8 items-center">
            {[
              "Home",
              "Menu",
              "Facility",
              "Gallery",
              "Catering",
              "Contact Us",
            ].map((item) => (
              <p
                key={item}
                className="cursor-pointer hover:text-red-500 hover:border-b-2 border-red-500"
              >
                {item}
              </p>
            ))}
            {/* <p>Home</p>
            <p>Menu</p>
            <p>Facility</p>
            <p>Gallery</p>
            <p>Catering</p>
            <p>Contact Us</p> */}
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
    </header>
  );
};

export default Navbar;
