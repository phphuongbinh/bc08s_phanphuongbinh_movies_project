import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_BANNER } from "../../services/config";
import { isEmpty } from "lodash";
import { Carousel } from "antd";

const BannerCarousel = () => {
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

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    !isEmpty(movieCur) && (
      <Carousel autoplay>
        {banner.length > 0 &&
          banner.map((movie) => (
            <div key={movie.id} style={contentStyle}>
              <img src={movie.bannerImg} alt="" />
            </div>
          ))}
      </Carousel>
    )
  );
};

export default BannerCarousel;
