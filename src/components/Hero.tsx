import React, { useState, useEffect } from "react";
import UserNavBar from "./UserNavBar";
import { requests, getMoviesFromUrl, movieGenres } from "../services/tmdb";
import IMovie from "../interfaces/IMovie";

const Hero = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [movie, setMovie] = useState<IMovie>();

  const truncateString = (str: string | undefined) => {
    if (typeof str === "string") {
      return `${str?.split(" ", 30).join(" ")} ...`;
    }
  };

  const randomEl = (arr: IMovie[]): IMovie =>
    arr[Math.floor(Math.random() * arr.length)];

  const getGenre = (movie: IMovie | undefined) => {
    const currentMovieGenres = movie?.genre_ids;
    if (currentMovieGenres) {
      const genresWords = movieGenres.reduce((result: string[], el) => {
        if (currentMovieGenres.includes(el.id)) {
          const movieGenre: string = el.genre!;
          result.push(movieGenre);
        }
        return result;
      }, []);

      return genresWords.join(", ");
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
    // slideshow
    const interval = setInterval(() => {
      setMovie(randomEl(movies));
    }, 40000);
    return () => clearInterval(interval);
  });

  return (
    <main
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
      className="w-full grid grid-rows-navbar-hero bg-cover bg-no-repeat bg-gradient-to-tr from-black duration-200">
      <UserNavBar />
      <section className="w-full h-full bg-cover bg-top flex items-end container mx-auto p-4 drop-shadow-lg">
        <div className="p-4 max-w-3xl w-full h-4/6 flex flex-col gap-4">
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            {movie?.title}
          </h1>
          <p className="text-white text-xl">{getGenre(movie)}</p>
          <p className="text-white text-xl">Released: {movie?.release_date}</p>
          <p className="w-full text-white text-xl">
            Rating: {movie?.vote_average}
          </p>
          <p className="w-full text-white text-lg">
            {truncateString(movie?.overview)}
          </p>
        </div>
      </section>
    </main>
  );
};
export default Hero;
