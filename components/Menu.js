import React from "react";

const Menu = () => {
  return (
    <div className="bg-white w-full">
      <div className=" flex flex-col justify-center items-center w-11/12 md:w-2/3 lg:w-1/2 m-auto py-16">
        <h1 className="text-[#FF4500] text-4xl">Our Menu</h1>
        <p className="text-xl text-black font-bold leading-normal my-10 text-center">
          Brain Stay is the ideal location for whatever the occasion; a casual
          get together, a special occasion or group dining. We are equipped with
          the very best equipments for outdoors and our massive production line
          enables us to produce food for up to 2000 people.
        </p>
        <button className="bg-black px-10 py-4 text-white">
          Check Our Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
