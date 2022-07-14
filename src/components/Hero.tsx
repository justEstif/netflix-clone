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

  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie>();

  const truncateString = (str: string | undefined) => {
    if (typeof str === "string") {
      return `${str?.split(" ", 30).join(" ")} ...`;
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

  useEffect(() => { // slideshow
    const interval = setInterval(() => {
      setMovie(randomEl(movies));
    }, 30000);
    return () => clearInterval(interval);
  });

  return (
    <main
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
      className="h-full w-full grid grid-rows-navbar-hero bg-cover bg-no-repeat bg-gradient-to-tr from-black">
      <UserNavBar />
      <section className="w-full h-full bg-cover bg-top flex items-end container mx-auto p-4 drop-shadow-lg">
        <div className="p-4 max-w-3xl w-full h-4/6 flex flex-col gap-4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            {movie?.title}
          </h1>
          <p className="text-white text-xl">{getGenre(movie)}</p>
          <p className="text-white text-xl">Released: {movie?.release_date}</p>
          <p className="w-full text-white text-xl">Rating: {movie?.vote_average}</p>
          <p className="w-full text-white text-lg">{truncateString(movie?.overview)}</p>
        </div>
      </section>
    </main>
  );
};
export default Hero;
