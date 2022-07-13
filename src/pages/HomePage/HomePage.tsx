import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PageRoutes from "../../constants/Page.Routes";
import FirebaseContext from "../../context/FirebaseContext";
// import UserContext from "../../context/UserContext";
import { signOut, Auth } from "firebase/auth";
import { requests, getMoviesFromUrl } from "../../services/tmdb";
import UserNavBar from "../../components/UserNavBar";
import Hero from "../../components/Hero";
// import Hero from "../../components/Hero"

interface HomeProps {}

type Movie = {
  title?: string;
  backdrop_path?: string;
  release_date?: string;
  overview?: string;
};
const Home: FunctionComponent<HomeProps> = () => {
  const firebase = useContext(FirebaseContext);
  const auth = firebase?.auth as Auth;

  const [movies, setMovies] = useState<[]>([]);
  const [movie, setMovie] = useState<Movie>();

  const truncateString = (str: string | undefined) => {
    if (typeof str === "string") {
      return `${str?.split(" ", 20).join(" ")} ...`;
    }
  };
  const randomEl = (arr: []) => arr[Math.floor(Math.random() * arr.length)];

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies: [] = await getMoviesFromUrl(requests.requestPopular);
      setMovies(() => popularMovies);
      setMovie(() => randomEl(popularMovies));
    };
    getMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMovie(randomEl(movies));
    }, 30000);
    return () => clearInterval(interval);
  });
  return (
    <div className="h-full w-full bg-black grid grid-rows-hero-content">
      <Hero />
      <div className="text-5xl text-white">Hello</div>
    </div>
  );
};

export default Home;
