import React, { FunctionComponent, Fragment, useEffect, useState } from "react";
import { getMoviesFromUrl } from "../services/tmdb";
import Movie from "./Movie";
import IMovie from "../interfaces/IMovie";

interface RowProps {
  title: string;
  fetchUrl: string;
}

const Row: FunctionComponent<RowProps> = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const receivedMovies: [] = await getMoviesFromUrl(fetchUrl);
      setMovies(() => receivedMovies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <p className="text-3xl text-white">{title}</p>
      <div className="h-[500px] flex flex-col flex-wrap overflow-x-scroll scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-black">
        {movies.map((movie, idx) => (
          <Fragment key={idx}>
            <Movie movie={movie} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default Row;
