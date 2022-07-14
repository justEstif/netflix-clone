import { useState, useEffect } from "react";
import UserNavBar from "./UserNavBar";
import { requests, getMoviesFromUrl, movieGenres } from "../services/tmdb";

type Movie = {
  title?: string;
  backdrop_path?: string;
  release_date?: string;
  overview?: string;
  vote_average?: string;
  genre_ids?: number[];
};

const Hero = () => {
  const [movies, setMovies] = useState<[]>([]);
  const [movie, setMovie] = useState<Movie>();

  const truncateString = (str: string | undefined) => {
    if (typeof str === "string") {
      return `${str?.split(" ", 20).join(" ")} ...`;
    }
  };

  const randomEl = (arr: Movie[]): Movie => arr[Math.floor(Math.random() * arr.length)];
  const getGenre = (movie: Movie | undefined) => {
    const currentMovieGenres = movie?.genre_ids
    if (currentMovieGenres) {
      const genresWords = movieGenres.reduce((result: string[], el) => {

        if (currentMovieGenres.includes(el.id)) {
          const movieGenre: string = el.genre!
          result.push(movieGenre)
        }
        return result
      }, [])
      return genresWords.join(", ")
    }
  };

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
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
      className="h-full w-full grid grid-rows-navbar-hero bg-cover bg-no-repeat">
      <UserNavBar />
      <section className="w-full h-full bg-cover bg-top flex items-end container mx-auto p-4">
        <div className="p-4 max-w-3xl w-full h-3/6 flex flex-col gap-4">
          <h1 className="text-2xl md:text-5xl font-bold text-white">
            {movie?.title}
          </h1>
          <div className="text-white">{}</div>
          <div className="text-white">Released: {movie?.release_date}</div>
          <div className="w-full text-white">{movie?.overview}</div>
          <div className="w-full text-white">Rating: {movie?.vote_average}</div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
