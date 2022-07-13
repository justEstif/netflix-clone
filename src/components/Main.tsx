import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../services/tmdb";

const randomEl = (arr: []) => arr[Math.floor(Math.random() * arr.length)];
const truncateString = (str: string) => `${str?.split(" ", 20).join(" ")} ...`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const re;
    };
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
      setMovie(randomEl(response.data.results));
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMovie(() => randomEl(movies));
    }, 30000);
    return () => clearInterval(interval);
  });

  return <div></div>;
};
