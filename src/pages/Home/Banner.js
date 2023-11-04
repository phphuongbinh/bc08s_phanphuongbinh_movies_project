import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_BANNER } from "../../services/config";
import { isEmpty } from "lodash";
import ModalVideo from "react-modal-video";
import Tag from "../../components/Tag/Tag";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [movieCur, setMovieCur] = useState({});
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get(URL_BANNER)
      .then((result) => {
        setBanner(result.data);
        setMovieCur(result.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    !isEmpty(movieCur) && (
      <div className="relative text-white banner">
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
            className="absolute z-20 flex items-center justify-center w-16 h-16 duration-300 -translate-x-1/2 -translate-y-1/2 rounded-full hover:scale-110 bg-primary top-1/2 left-1/2"
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
        <div className="absolute z-10 bottom-5 left-20 right-20">
          <div className="space-x-2 ">
            {movieCur.tags.map((item, index) => (
              <Tag key={index} title={item} />
            ))}
            <h3 className="mt-3 mb-5 text-3xl font-semibold">
              {movieCur.name}
            </h3>
          </div>

          <div className="grid grid-cols-4 gap-10 banner-list">
            {banner.length > 0 &&
              banner.map((movie) => (
                <div
                  key={movie.id}
                  className="relative cursor-pointer banner-item rounded-2xl"
                  onClick={() => setMovieCur(movie)}
                >
                  {/* <div className="border-[6px] border-white rounded-2xl"> */}
                  <img
                    src={movie.bannerImg}
                    alt=""
                    className="object-cover w-full h-full rounded-2xl"
                  />
                  {!isEmpty(movieCur) && movie.id === movieCur.id ? (
                    <div className="border-[2px] border-primary rounded-2xl absolute inset-0"></div>
                  ) : (
                    <div className="absolute inset-0 bg-black bg-opacity-50 overlay rounded-2xl"></div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
