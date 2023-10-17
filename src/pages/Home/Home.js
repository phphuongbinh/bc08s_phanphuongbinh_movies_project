import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import Main from "../../layout/Main";
import Banner from "./Banner";
import MovieList from "./MovieList";
import TabMovie from "./TabMovie";

const Home = () => {
  const { info } = useSelector((state) => state.userReducer);
  return (
    <Fragment>
      <Banner />
      <MovieList />
      <TabMovie />
    </Fragment>
  );
};

export default Home;
