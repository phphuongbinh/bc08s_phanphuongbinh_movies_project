import React from "react";
import Lottie from "lottie-react";
import bgLogin from "./bg-login.json";

const Banner = () => {
  return (
    <div>
      <Lottie
        className="w-[270px] lg:w-[400px]"
        animationData={bgLogin}
        loop={true}
      />
    </div>
  );
};

export default Banner;
