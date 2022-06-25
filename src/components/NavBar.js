import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center py-6 px-11 absolute z-10">
      <h1 className="tracking-widest font-bebas text-red-700 text-5xl cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="pr-4 cursor-pointer shadow-2xl text-white duration-500 hover:text-red-600 hover: scale-110 ">
          Sign In
        </button>
        <button className="px-6 py-2 rounded cursor-pointer bg-red-800 text-white hover:bg-red-700 hover:text-coolgray-300 duration-500">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
