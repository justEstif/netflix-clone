import axios from "axios";
import React, { useState, useEffect } from "react";
import request from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-tr from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w-full top-[35%] lg:top-[37%] lg:w-1/2 px-12 md:p-12">
        <div className="mb-14">
          <div>{movie?.title}</div>
          <div>{movie?.relase_data}</div>
          <div>{movie?.overview}</div>
        </div>
        <div>
          <button className="px-12 rounded duration-500 hover:bg-gradient-to-r from-red-800 via-zinc-400 to-red-800 mr-3 py-3 bg-gray-200 tracking-wider text-lg font-bold text-black">
            &#9658; Play
          </button>
          <button className="px-12 rounded py-3 bg-gray-600 tracking-wider hover:bg-gray-700 text-lg font-bold text-white">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
