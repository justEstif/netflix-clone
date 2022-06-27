import uniqid from "uniqid";
import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row
        rowId={uniqid()}
        title="Trending"
        fetchURL={requests.requestTrending}
      />
      <Row
        rowId={uniqid()}
        title="Popular"
        fetchURL={requests.requestPopular}
      />
      <Row
        rowId={uniqid()}
        title="Top Rated"
        fetchURL={requests.requestTopRated}
      />
      <Row rowId={uniqid()} title="Horror" fetchURL={requests.requestHorror} />
      <Row
        rowId={uniqid()}
        title="Upcoming"
        fetchURL={requests.requestUpcoming}
      />
    </div>
  );
};

export default Home;
