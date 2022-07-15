import React, { FaHeart, FaRegHeart } from "react-icons/fa";
import IMovie from "../interfaces/IMovie";
import { useContext, FunctionComponent, useEffect, useState } from "react";
import { handleMovieLike } from "../services/firebase";
import { getMovieInfo } from "../services/tmdb";
import UserContext from "../context/UserContext";

interface MovieProps {
  movie: IMovie;
}

const Movie: FunctionComponent<MovieProps> = ({ movie }) => {
  const user = useContext(UserContext);
  const userDocId = user?.user?.userDoc?.docId;
  const [liked, setLiked] = useState(false);
  const likedArray = user?.user?.userDoc?.liked;

  const checkMovieStatus = () => {
    if (likedArray && movie?.id) {
      setLiked(likedArray?.includes(movie?.id));
    }
  };

  const handleLike = async () => {
    if (userDocId) {
      await handleMovieLike(userDocId, movie?.id, liked);
      setLiked((curr) => !curr);
    }
  };

  useEffect(() => {
    checkMovieStatus();
  }, [likedArray]);

  return (
    <div
      className="max-w-md w-full h-full bg-cover bg-no-repeat bg-top text-center flex flex-col items-center align-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.poster_path})`,
      }}>
      {user?.user ? (
        <div className="p-4">
          <button onClick={() => handleLike()}>
            {liked ? (
              <FaHeart size={28} className="text-gray-300" />
            ) : (
              <FaRegHeart size={28} className="text-gray-300" />
            )}
          </button>
        </div>
      ) : (
        <div
          className={`flex items-center text-white text-sm font-bold p-4 ${alert}`}
          role="alert">
          <p>Please log in to like.</p>
        </div>
      )}
    </div>
  );
};
export default Movie;
