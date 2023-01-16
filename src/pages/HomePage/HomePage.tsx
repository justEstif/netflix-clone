import React from "react";
import Hero from "../../components/Hero";
import Row from "../../components/Row";
import { requests } from "../../services/tmdb";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      <Hero />
      <section className="flex flex-col gap-7 px-4 mx-auto w-full">
        <Row title={"Popular"} fetchUrl={requests.requestPopular} />
        <Row title={"Top Rated"} fetchUrl={requests.requestTopRated} />
        <Row title={"Trending"} fetchUrl={requests.requestTrending} />
        <Row title={"Horror"} fetchUrl={requests.requestHorror} />
        <Row title={"Upcoming"} fetchUrl={requests.requestUpcoming} />
      </section>
    </div>
  );
};

export default HomePage;
