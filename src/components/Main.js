import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const randomMovie = () => movies[Math.floor(Math.random() * movies.length)];
  const truncateString = (str) => `${str?.split(" ", 20).join(" ")} ...`;

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
    setMovie(randomMovie());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMovie(randomMovie());
    }, 20000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[600px] bg-gradient-to-tr from-black"></div>
        <img
          className="w-full h-full object-cover lg:object-top"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w-full top-40 px-12 md:p-12">
        <div className="mb-14">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
        </div>
        <div className="mb-10">
          <button className="px-12 rounded duration-500 hover:bg-gradient-to-r from-red-800 via-zinc-400 to-red-800 mr-3 py-3 bg-gray-200 tracking-wider text-lg font-bold text-black">
            &#9658; Play
          </button>
          <button className="px-12 rounded py-3 bg-gray-600 tracking-wider hover:bg-gray-700 text-lg font-bold text-white">
            Watch Later
          </button>
        </div>
        <div>
          <div className="text-gray-400">Released: {movie?.release_date}</div>
          <div className="w-full md:max-w-[50%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
