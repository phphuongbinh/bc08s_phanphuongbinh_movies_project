import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import Main from "../../layout/Main";
import Banner from "./Banner";
import MovieList from "./MovieList";
import TabMovie from "./TabMovie";
import PaginateMovie from "./PaginateMovie";

const Home = () => {
  const { info } = useSelector((state) => state.userSlice);
  return (
    <Fragment>
      <Banner />
      {/* <MovieList /> */}
      <PaginateMovie orgName={"afas"} perPage={5} />
      <TabMovie />
    </Fragment>
  );
};

export default Home;
