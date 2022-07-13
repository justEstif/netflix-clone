import { useState, useEffect } from "react";
import { requests, getMoviesFromUrl } from "../services/tmdb";

type Movie = {
  title?: string;
  backdrop_path?: string;
  release_date?: string;
  overview?: string;
};

const Hero = () => {
  const [movies, setMovies] = useState<[]>([]);
  const [movie, setMovie] = useState<Movie>();

  const truncateString = (str: string | undefined) => {
    if (typeof (str) === "string") {
      return `${str?.split(" ", 20).join(" ")} ...`;
    }
  }
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
    <div
      className="w-full h-full bg-cover bg-top flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}>

      <div className="p-4 max-w-3xl w-full h-3/6 flex flex-col gap-4">
        <h1 className="text-2xl md:text-5xl font-bold text-white">{movie?.title}</h1>
        <div className="text-white">Released: {movie?.release_date}</div>
        <div className="w-full text-gray-200">
          {truncateString(movie?.overview)}
        </div>
      </div>
    </div>
  );
};
export default Hero;
