import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex justify-between items-center py-6 px-11 absolute z-20">
      <h1 className="tracking-widest font-bebas text-red-700 text-5xl cursor-pointer">
        <Link to="/">NETFLIX</Link>
      </h1>
      <div>
        <button className="pr-4 cursor-pointer shadow-2xl text-white duration-500 hover:text-red-600 hover: scale-110 ">
          {user?.email ? (
            <Link to="/account">Account</Link>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </button>
        <button
          onClick={() => {
            return user?.email ? handleLogout() : null;
          }}
          className="px-6 py-2 rounded cursor-pointer bg-red-800 text-white hover:bg-red-700 hover:text-coolgray-300 duration-500">
          {user?.email ? (
            <Link to="/">Log Out</Link>
          ) : (
            <Link to="/signup">Sign Up</Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
