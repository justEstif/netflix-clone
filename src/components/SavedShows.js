import React, { Fragment, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import uniqid from "uniqid";
import { useState } from "react";
import { db } from "../firebase-config";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    const slider = document.getElementById(`slider`);
    slider.scrollLeft -= 200;
  };
  const slideRight = () => {
    const slider = document.getElementById(`slider`);
    slider.scrollLeft += 200;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <div className="px-10 py-4">
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={65}
          onClick={slideLeft}
          onMouseOver={slideLeft}
          color={"red"}
          className="left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        />

        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar scrollbar-hide">
          {""}

          {movies?.map((movie) => (
            <Fragment key={uniqid()}>
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative pr-3">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-70 duration-300 opacity-0 text-white">
                  <p className="whitespace-normal text-s md:text-sm font-bold flex justify-center items-center h-full text-center tracking-widest">
                    {movie?.title}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          onMouseOver={slideRight}
          size={65}
          color={"red"}
          className="right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default SavedShows;
