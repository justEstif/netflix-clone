import uniqid from "uniqid";
import axios from "axios";
import Movie from "./Movie";
import React, { useState, useEffect, Fragment } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import axios from "axios";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const slideLeft = (rowId) => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft -= 200;
  };
  const slideRight = (rowId) => {
    const slider = document.getElementById(`slider ${rowId}`);
    slider.scrollLeft += 200;
  };

  return (
    <div className="px-10 py-4">
      <h2 className="text-white font-bold md:text-xl mb-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={65}
          onClick={() => slideLeft(rowId)}
          onMouseOver={() => slideLeft(rowId)}
          color={"red"}
          className="left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        />

        <div
          id={`slider ${rowId}`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar scrollbar-hide">
          {""}
          {movies.map((movie) => (
            <Fragment key={uniqid()}>
              <Movie movie={movie} />
            </Fragment>
          ))}
        </div>
        <MdChevronRight
          onClick={() => slideRight(rowId)}
          onMouseOver={() => slideRight(rowId)}
          size={65}
          color={"red"}
          className="right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default Row;
