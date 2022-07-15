import React, { FunctionComponent } from "react";
import Hero from "../../components/Hero";
import Row from "../../components/Row";
import { requests } from "../../services/tmdb";

const HomePage: FunctionComponent = () => {
  return (
    <div className="h-full w-full flex flex-col bg-black">
      <Hero />
      <section className="w-full mx-auto px-4 flex flex-col gap-7">
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
