import React, { useEffect, useState } from "react";
import { movieServ } from "../../services/api";
import ItemMovie from "./ItemMovie";

const MovieList = () => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    movieServ
      .getListMovie()
      .then((result) => {
        setListMovie(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    movieServ
      .getListMovieWithPagination()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderListMovie = () => {
    return listMovie.map((movie, index) => (
      <ItemMovie item={movie} key={index} />
    ));
  };
  return (
    <div className="grid grid-cols-5 gap-6 text-white page-container">
      {renderListMovie()}
    </div>
  );
};

export default MovieList;
