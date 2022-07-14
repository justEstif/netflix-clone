import { Link } from "react-router-dom";
import PageRoutes from "../constants/Page.Routes";

const UserNavBar = () => {
  return (
    <nav className="flex justify-between container mx-auto p-4">
      <button className=" text-red-700 text-6xl uppercase tracking-wider font-bebas">
        <Link to={PageRoutes.Landing}>Netflix</Link>
      </button>
      <div className="flex items-center gap-5 text-lg text-white">
        <button className="bg-red-700 py-2 px-4  hover:bg-red-800">
          <Link to={PageRoutes.SignIn} state={{userEmail:null}}>
            Sign in
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default UserNavBar;
