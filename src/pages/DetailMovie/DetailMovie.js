import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { getInfoMovie } from "../../services/api";
import moment from "moment/moment";
import "moment/locale/vi";
import MovieList from "../Home/MovieList";
import ModalVideo from "react-modal-video";
import Tag from "../../components/Tag/Tag";
import { useDispatch } from "react-redux";
import { selectMovie } from "../../redux/movieSlice";
const DetailMovie = () => {
  const { maPhim } = useParams();
  const [movie, setMovie] = useState({});
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getInfoMovie(maPhim)
      .then((result) => {
        setMovie(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maPhim, dispatch]);
  return (
    <div>
      <div className="relative w-full h-[630px]">
        <img
          src={movie.hinhAnh}
          alt=""
          className="object-cover w-full h-full"
        />
        <ModalVideo
          channel="custom"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpenTrailer}
          url={movie.trailer}
          onClose={() => setIsOpenTrailer(false)}
        />

        <div className="overlay absolute top-0 left-0 z-10 w-full h-full inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3] to-[transparent]"></div>
        <div className="absolute z-10 text-white bottom-5 left-20 right-20 page-container">
          <div className="">
            <h3 className="mt-3 mb-5  text-3xl mx-0 font-semibold">
              {movie.tenPhim}
            </h3>
            <div className="mb-10 space-x-2">
              <Tag title="Hành động" />
              <Tag title="Phiêu lưu" />
              <Tag title="Hài hước" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 banner-list">
            <div
              onClick={() => setIsOpenTrailer(true)}
              className="h-[150px] rounded-2xl bg-primary flex justify-center items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-14 h-14"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-[150px] gap-3 rounded-2xl bg-primary flex justify-center items-center cursor-pointer">
              <span className="text-2xl">Đặt vé ngay</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
              </span>
            </div>
            <div className="h-[150px] rounded-2xl bg-black/20 backdrop-filter backdrop-blur-md flex relative">
              <p className="-rotate-90 absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-500 font-semibold">
                Thời lượng
              </p>
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                126 phút
              </p>
            </div>
            <div className="h-[150px] rounded-2xl bg-black/20 backdrop-filter backdrop-blur-md flex relative">
              <p className="-rotate-90 absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-500 font-semibold">
                Phát sóng
              </p>
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                {moment(movie.ngayKhoiChieu).format("L")}
              </p>
            </div>
            <div className="h-[150px] rounded-2xl bg-black/20 backdrop-filter backdrop-blur-md flex relative">
              <p className="-rotate-90 absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-500 font-semibold">
                Đánh giá
              </p>
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                8/10
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container text-gray-300">
        <div className="mb-8">
          <h3 className="uppercase text-gray-600 mb-2 text-xl font-semibold">
            Mô tả
          </h3>
          <p>{movie.moTa}</p>
        </div>
        <div className="mb-8">
          <h3 className="uppercase text-gray-600 -mb-12 text-xl font-semibold">
            Phim khác
          </h3>
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
