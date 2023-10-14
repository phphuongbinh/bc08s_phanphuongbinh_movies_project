import React from "react";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="relative w-full h-[600px]">
        <img
          src="https://i.pinimg.com/originals/a9/11/09/a91109819f2ba82a46b13912abbcfae3.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="overlay absolute top-0 left-0 z-10 w-full h-full inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3] to-[transparent]"></div>
      </div>
      <div className="absolute bottom-5 left-20 right-20 z-10">
        <div className="space-x-2">
          <span>Monkey D Luffy</span>
          <span>Eiichiro Oda</span>
        </div>
        <h3 className="text-3xl font-semibold">One Piece: Time Skip</h3>
        <div className="banner-list grid grid-cols-4 gap-10">
          <div className="border-[6px] border-white rounded-2xl">
            <img
              src="https://i.pinimg.com/736x/e4/96/6d/e4966d9fa826e1498907d0a77925b43e.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="rounded-2xl">
            <img
              src="https://i.pinimg.com/736x/e4/96/6d/e4966d9fa826e1498907d0a77925b43e.jpg "
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="rounded-2xl">
            <img
              src="https://i.pinimg.com/736x/e4/96/6d/e4966d9fa826e1498907d0a77925b43e.jpg "
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="rounded-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYmZxGqPIbJBmV9UGhvb7y9jD8i8eVfwRlQ&usqp=CAU "
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
