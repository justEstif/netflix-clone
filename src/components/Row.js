import axios from "axios";
import Movie from "./Movie";
import React, { useState, useEffect, Fragment } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import axios from "axios";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  return (
    <div className="px-10 py-4">
      <h2 className="text-white font-bold md:text-xl mb-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={45}
          color={"red"}
          className="left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        />

        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar scrollbar-hide">
          {""}
          {movies.map((movie, idx) => (
            <Movie movie={movie} idx={idx} />
          ))}
        </div>
        <MdChevronRight
          size={45}
          color={"red"}
          className="right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
