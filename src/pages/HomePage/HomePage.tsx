import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PageRoutes from "../../constants/Page.Routes";
import FirebaseContext from "../../context/FirebaseContext";
// import UserContext from "../../context/UserContext";
import { signOut, Auth } from "firebase/auth";
import Hero from "../../components/Hero"

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  const firebase = useContext(FirebaseContext);
  const auth = firebase?.auth as Auth;

  return (
    <div className="h-full w-full bg-black">
      <div className="h-full w-full grid grid-rows-navbar-2-content container mx-auto p-4">
        <nav className="flex justify-between">
          <button className=" text-red-700 text-6xl uppercase tracking-wider font-bebas">
            <Link to={PageRoutes.Landing}>Netflix</Link>
          </button>
          <div className="flex items-center gap-5 text-lg text-white">
            <button className="bg-red-700 py-3 px-7 rounded-md hover:bg-red-800">
              <Link to={PageRoutes.Account} state={{ userEmail: null }}>
                Account
              </Link>
            </button>

            <button
              className="bg-gray-700 py-3 px-7 rounded-md hover:bg-gray-800"
              onKeyDown={({ key }) => key === "Enter" && signOut(auth)}
              onClick={() => signOut(auth)}>
              Sign Out
            </button>
          </div>
        </nav>

<Hero />

        <section className="bg-red-300">
          <div><button>Click THis</button></div>
          <div>Row</div>
          <div>Row</div>
        </section>
      </div>
    </div>
  );
};

export default Home;
