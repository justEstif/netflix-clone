import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PageRoutes from "../../constants/Page.Routes";
import FirebaseContext from "../../context/FirebaseContext";
import { requests, getMoviesFromUrl } from "../../services/tmdb"
// import UserContext from "../../context/UserContext";
import { signOut, Auth } from "firebase/auth";

interface HomeProps { }

const randomEl = (arr: []) => arr[Math.floor(Math.random() * arr.length)];
const truncateString = (str: string) => `${str?.split(" ", 20).join(" ")} ...`;
const Home: FunctionComponent<HomeProps> = () => {
  const firebase = useContext(FirebaseContext);
  const auth = firebase?.auth as Auth;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await getMoviesFromUrl(requests.requestPopular);
      setMovies(popularMovies);
      setMovie(randomEl(popularMovies));
    }
    getMovies()
  }, []);

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
        <main className="bg-yellow-200">Image here</main>
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
