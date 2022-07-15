import React, { FunctionComponent, Fragment, useEffect, useState } from "react";
import Movie from "./Movie";
import IMovie from "../interfaces/IMovie";

interface RowProps {
  title: string;
  movies: IMovie[];
}

const AccountRow: FunctionComponent<RowProps> = ({ title, movies }) => {
  return (
    <div>
      <p className="text-3xl text-white">{title}</p>
      <div className="h-screen flex flex-col flex-wrap overflow-x-scroll scrollbar scrollbar-thumb-red-900 scrollbar-track-black">
        {movies.map((movie, idx) => (
          <Fragment key={idx}>
            <Movie movie={movie} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default AccountRow;
