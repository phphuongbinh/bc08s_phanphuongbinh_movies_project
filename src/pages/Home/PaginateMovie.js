import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { movieServ } from "../../services/api";
import ItemMovie from "./ItemMovie";
export default function App() {
  const [movies, setMovies] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() => {
    movieServ
      .getListMovieWithPagination(page)
      .then((result) => {
        setMovies(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  console.log(page);

  const renderListMovie = () => {
    return movies?.items?.map((movie, index) => (
      <ItemMovie item={movie} key={index} />
    ));
  };
  return (
    <div className="page-container">
      <div className="grid grid-cols-5 gap-6 mb-6 text-white">
        {renderListMovie()}
      </div>
      <Pagination
        defaultCurrent={movies.currentPage}
        current={page}
        total={movies.totalCount}
        onChange={(value) => setPage(value)}
        className="flex justify-center"
      />
    </div>
  );
}
