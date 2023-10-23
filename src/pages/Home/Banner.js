import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { URL_BANNER } from "../../services/config";
import { isEmpty } from "lodash";
import ModalVideo from "react-modal-video";
import Spinner from "../../components/Spinner/Spinner";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [movieCur, setMovieCur] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(URL_BANNER)
      .then((result) => {
        setBanner(result.data);
        setMovieCur(result.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    !isEmpty(movieCur) && (
      <div className="banner text-white relative">
        <div className="relative w-full h-[630px]">
          <img
            src={movieCur.bannerImg}
            alt=""
            className="object-cover w-full h-full"
          />
          <ModalVideo
            channel="custom"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            url={movieCur.trailer}
            onClose={() => setOpen(false)}
          />
          <button
            className="w-16 h-16 flex items-center justify-center hover:scale-110 duration-300 bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="overlay absolute top-0 left-0 z-10 w-full h-full inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3] to-[transparent]"></div>
        </div>
        <div className="absolute bottom-5 left-20 right-20 z-10">
          <div className="space-x-2 ">
            {movieCur.tags.map((item, index) => (
              <span
                className="px-3 py-1 border border-white rounded-lg"
                key={index}
              >
                {item}
              </span>
            ))}
            <h3 className="text-3xl font-semibold mt-3 mb-5">
              {movieCur.name}
            </h3>
          </div>

          <div className="banner-list grid grid-cols-4 gap-10">
            {banner.length > 0 &&
              banner.map((movie) => (
                <div
                  key={movie.id}
                  className="banner-item rounded-2xl relative cursor-pointer"
                  onClick={() => setMovieCur(movie)}
                >
                  {/* <div className="border-[6px] border-white rounded-2xl"> */}
                  <img
                    src={movie.bannerImg}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {!isEmpty(movieCur) && movie.id === movieCur.id ? (
                    <div className="border-[2px] border-primary rounded-2xl absolute inset-0"></div>
                  ) : (
                    <div className="overlay inset-0 bg-black bg-opacity-50 rounded-2xl absolute"></div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <Spinner isLoading={isLoading} />
      </div>
    )
  );
};

export default Banner;
