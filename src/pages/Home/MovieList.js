import React, { useEffect, useState } from "react";
import { movieServ } from "../../services/api";
import Spinner from "../../components/Spinner/Spinner";
import ItemMovie from "./ItemMovie";

const MovieList = () => {
  const [listMovie, setListMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    movieServ
      .getListMovie()
      .then((result) => {
        setListMovie(result.data.content);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const renderListMovie = () => {
    return listMovie.map((movie, index) => (
      <ItemMovie item={movie} key={index} />
    ));
  };
  return (
    <div className="grid grid-cols-5 gap-6 text-white page-container">
      <Spinner isLoading={isLoading} />
      {renderListMovie()}
    </div>
  );
};

export default MovieList;
