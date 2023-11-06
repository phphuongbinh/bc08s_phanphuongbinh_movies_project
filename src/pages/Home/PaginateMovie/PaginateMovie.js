import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { movieServ } from "../../../services/api";
import ItemMovie from "../ItemMovie";

const PaginateMovie = () => {
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

  const renderListMovie = () => {
    return movies?.items?.map((movie, index) => (
      <ItemMovie item={movie} key={index} />
    ));
  };
  return (
    <div className="page-container max-w-[90%]">
      <h3 className="text-xl font-semibold mb-4 text-white/60">
        PHIM ĐƯỢC XEM NHIỀU
      </h3>
      <div className="grid grid-cols-1 gap-6 mb-6 text-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
};

export default PaginateMovie;
