import React from "react";
import { isEmpty } from "lodash";

const DetailMovie = () => {
  return (
    <div>
      <div className="relative w-full h-[630px]">
        <img
          src="https://timtalkingpictures.files.wordpress.com/2022/07/thor.jpeg"
          alt=""
          className="object-cover w-full h-full"
        />
        {/* <ModalVideo
    channel="custom"
    youtube={{ mute: 0, autoplay: 0 }}
    isOpen={isOpen}
    url={movieCur.trailer}
    onClose={() => setOpen(false)}
  /> */}
        {/* <button
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
  </button> */}
        <div className="overlay absolute top-0 left-0 z-10 w-full h-full inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3] to-[transparent]"></div>
      </div>
      <div className="absolute z-10 text-white bottom-5 left-20 right-20">
        <div className="space-x-2 ">
          <span>Chris Hemsworth</span>
          <span>Tom Hiddleston</span>
          <h3 className="mt-3 mb-5 text-3xl font-semibold">THOR</h3>
          <div className="mb-10 space-x-2">
            <span className="px-3 py-2 border border-gray-300 rounded-lg backdrop-blur-xl bg-white/40 ">
              Fantasy
            </span>
            <span className="px-3 py-2 border border-gray-300 rounded-lg bg-white/40 backdrop-blur-lg ">
              Action
            </span>
            <span className="px-3 py-2 border border-gray-300 rounded-lg bg-white/40 backdrop-blur-lg ">
              Adventure
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 banner-list">
          <div className="h-[150px] rounded-2xl bg-primary"></div>
          <div className="h-[150px] rounded-2xl bg-primary"></div>
          <div className="h-[150px] rounded-2xl bg-primary"></div>
          <div className="h-[150px] rounded-2xl bg-primary"></div>
          <div className="h-[150px] rounded-2xl bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
