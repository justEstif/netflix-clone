import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import AccountRow from "../../components/AccountRow";
import { requests, getMovieInfo } from "../../services/tmdb";
import UserNavBar from "../../components/UserNavBar"
import UserContext from "../../context/UserContext";

const AccountPage: FunctionComponent = () => {
  const user = useContext(UserContext)
  const [movies, setMovies] = useState(user?.user?.userDoc?.liked)
  const [title, setTitle] = useState("")

  useEffect(() => {
    const getLikedMoviesInfo = async () => {
      const allMovies = []
      const likedMovies = user?.user?.userDoc?.liked
      for (const likedMovie of likedMovies) {
        const movieInDb = await getMovieInfo(likedMovie)
        allMovies.push(movieInDb)
      }
      setMovies(() => allMovies)
    }
    getLikedMoviesInfo()
  }, [])


  return (
    <div className="h-full w-full flex flex-col bg-black">
      <UserNavBar />
      <section className="w-full mx-auto px-4 flex flex-col gap-7">
        {
          movies && (
            <AccountRow title={"Liked"} movies={movies} />
          )
        }
      </section>
    </div>
  );
};

export default AccountPage;
