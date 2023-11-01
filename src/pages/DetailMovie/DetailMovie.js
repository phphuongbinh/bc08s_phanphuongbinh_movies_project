import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfoMovie, movieServ } from "../../services/api";
import moment from "moment/moment";
import "moment/locale/vi";
import ModalVideo from "react-modal-video";
import Tag from "../../components/Tag/Tag";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
const DetailMovie = () => {
  const { maPhim } = useParams();
  const [movie, setMovie] = useState({});
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    movieServ
      .getInfoMovie(maPhim)
      .then((result) => {
        console.log(result.data.content);
        setMovie(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maPhim, dispatch]);
  const handleBookTicket = () => {
    console.log("dat ve thanh cong");
  };
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
        <div className="absolute z-10 text-white bottom-5 left-4 right-4 lg:left-20 lg:right-20 page-container">
          <div className="">
            <h3 className="mx-0 mt-3 mb-5 text-3xl font-semibold">
              {movie.tenPhim}
            </h3>
            <div className="mb-10 space-x-2">
              <Tag title="Hành động" />
              <Tag title="Phiêu lưu" />
              <Tag title="Hài hước" />
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-2 lg:gap-4 sm:grid-cols-3 xl:grid-cols-5 banner-list">
            <div
              onClick={() => setIsOpenTrailer(true)}
              className="  h-[60px] hover:scale-105 duration-300 lg:h-[150px] rounded-2xl bg-primary flex justify-center items-center cursor-pointer relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 lg:w-14 lg:h-14"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              onClick={handleBookTicket}
              className=" h-[60px] hover:scale-105 duration-300 lg:h-[150px] gap-3 rounded-2xl bg-primary flex justify-center items-center cursor-pointer relative"
            >
              <span className="text-md lg:text-2xl">Đặt vé ngay</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 lg:w-8 lg:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1 h-[60px]  lg:h-[150px] rounded-2xl bg-black/20 backdrop-filter backdrop-blur-md flex relative">
              <p className="p-2 text-xs font-semibold text-gray-500 lg:text-xl lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 left-5 lg:top-1/2">
                Thời lượng
              </p>
              <p className="absolute font-bold -translate-x-1/2 lg:-translate-y-1/2 text-md lg:text-2xl top-1/2 left-1/2">
                126 phút
              </p>
            </div>
            <div className="h-[60px]  lg:h-[150px] rounded-2xl bg-black/20 backdrop-filter backdrop-blur-md flex relative">
              <p className="p-2 text-xs font-semibold text-gray-500 lg:text-xl lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 left-5 lg:top-1/2">
                Phát sóng
              </p>
              <p className="absolute font-bold -translate-x-1/2 lg:-translate-y-1/2 text-md lg:text-2xl top-1/2 left-1/2">
                {moment(movie.ngayKhoiChieu).format("L")}
              </p>
            </div>
            <div className="h-[60px]  lg:h-[150px] rounded-2xl bg-black/20 backdrop-filter backdrop-blur-md flex relative">
              <p className="p-2 text-xs font-semibold text-gray-500 lg:text-xl lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 left-5 lg:top-1/2">
                Đánh giá
              </p>
              <p className="absolute font-bold -translate-x-1/2 lg:-translate-y-1/2 text-md lg:text-2xl top-1/2 left-1/2">
                8/10
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-300 page-container max-w-[90%]">
        <div className="mb-8">
          <h3 className="mb-2 text-xl font-semibold text-gray-600 uppercase">
            Mô tả
          </h3>
          <p>{movie.moTa}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailMovie;
