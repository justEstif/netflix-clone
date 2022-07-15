import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import AccountRow from "../../components/AccountRow";
import { requests, getMovieInfo } from "../../services/tmdb";
import UserNavBar from "../../components/UserNavBar";
import UserContext from "../../context/UserContext";
import IMovie from "../../interfaces/IMovie";

const AccountPage: FunctionComponent = () => {
  const user = useContext(UserContext);
  const likedMovies = user?.user?.userDoc?.liked;
  const [movies, setMovies] = useState<IMovie[] | null>();

  // page loads
  useEffect(() => {
    const getArrayOfMovies = async (likedMovies: number[]) => {
      const unresolvedPromises = likedMovies.map((likedMovie) =>
        getMovieInfo(likedMovie)
      );
      const allMovies = await Promise.all(unresolvedPromises);
      setMovies(() => allMovies);
    };
    likedMovies && getArrayOfMovies(likedMovies);
  }, [likedMovies]);

  return (
    <div className="h-full w-full flex flex-col bg-black">
      <UserNavBar />
      <section className="w-full mx-auto px-4 flex flex-col gap-7">
        {movies && <AccountRow title={"Liked"} movies={movies} />}
      </section>
    </div>
  );
};

export default AccountPage;
