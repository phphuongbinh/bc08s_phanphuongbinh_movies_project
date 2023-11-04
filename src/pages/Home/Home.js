import React, { Fragment } from "react";
import Banner from "./Banner";
import TabMovie from "./TabMovie";
import PaginateMovie from "./PaginateMovie/PaginateMovie";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      {/* <MovieList /> */}
      <PaginateMovie />
      <TabMovie />
    </Fragment>
  );
};

export default Home;
