import React, { Link } from "react-router-dom";
import PageRoutes from "../constants/Page.Routes";
import { signOut, Auth } from "firebase/auth";
import FirebaseContext from "../context/FirebaseContext";
import { useContext } from "react";

const UserNavBar = () => {
  const firebase = useContext(FirebaseContext);
  const auth = firebase?.auth as Auth;
  return (
    <nav className="flex justify-between container mx-auto p-4">
      <Link to={PageRoutes.Landing}>
        <button className=" text-red-700 text-6xl uppercase tracking-wider font-bebas">
          Netflix
        </button>
      </Link>
      <div className="flex items-center gap-5 text-lg text-white">
        <Link to={PageRoutes.Account}>
          <button className="bg-red-700 py-2 px-4  hover:bg-red-800">
            Account
          </button>
        </Link>

        <button
          className="bg-black py-2 px-4 hover:bg-gray-800"
          onKeyDown={({ key }) => key === "Enter" && signOut(auth)}
          onClick={() => signOut(auth)}>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default UserNavBar;
