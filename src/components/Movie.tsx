import React, { FaHeart, FaRegHeart } from "react-icons/fa";
import IMovie from "../interfaces/IMovie";
import { useContext, FunctionComponent, useEffect } from "react";
import UserContext from "../context/UserContext";
import { getUserInDb } from "../services/firebase";
import FirebaseContext from "../context/FirebaseContext";

interface MovieProps {
  movie: IMovie;
}

const Movie: FunctionComponent<MovieProps> = ({ movie }) => {
  const user = useContext(UserContext);
  return (
    <div
      className="max-w-md w-full h-full bg-cover bg-no-repeat bg-top text-center flex flex-col items-center align-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.poster_path})`,
      }}>
      {user?.user ? (
        <div className="p-4">
          <FaHeart size={28} className="text-gray-300" />
          <FaRegHeart size={28} className="text-gray-300" />
        </div>
      ) : (
        <div
          className={`flex items-center text-white text-sm font-bold p-4 ${alert}`}
          role="alert">
          <p>Please log in to like.</p>
        </div>
      )}

      <p className="text-white text-lg">{movie?.title}</p>
    </div>
  );
};
export default Movie;
