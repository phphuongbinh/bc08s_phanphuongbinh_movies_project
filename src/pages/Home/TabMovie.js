import React, { Fragment, useEffect, useState } from "react";
import { getMovieByTheater } from "../../services/api";

import { ConfigProvider, Tabs } from "antd";
import moment from "moment";
const onChange = (key) => {};

const TabMovie = () => {
  const [listTheater, setListTheater] = useState([]);
  useEffect(() => {
    getMovieByTheater()
      .then((result) => {
        setListTheater(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderListMovie = (listMovie) => {
    return listMovie.map((movie, index) => (
      <div key={index} className="flex gap-4 py-5 border-b border-purple-900">
        <img src={movie.hinhAnh} className="object-cover w-24 h-32" alt="" />
        <div>
          <h3 className="mb-3 text-lg font-semibold text-primary">
            {movie.tenPhim}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {movie.lstLichChieuTheoPhim.slice(0, 4).map((schedule) => (
              <span className="px-3 py-2 font-semibold duration-300 rounded-lg cursor-pointer bg-slate-800 text-primary hover:scale-105">
                <span className="text-[#4cc9f0]">
                  {moment(schedule.ngayChieuGioChieu).format("L")}{" "}
                </span>{" "}
                ~
                <span className="text-[#b5179e]">
                  {" "}
                  {moment(schedule.ngayChieuGioChieu).format("LT")}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  const renderListTheater = (listTheater) => {
    return listTheater?.map((theater, index) => {
      return {
        key: index,
        label: (
          <div className="text-left w-[300px] transition-all hover:scale-105">
            <h3 className="text-base uppercase text-[#4cc9f0] font-semibold">
              {theater.tenCumRap}
            </h3>
            <p className="text-white truncate">{theater.diaChi}</p>
          </div>
        ),
        children: (
          <div className="text-white h-[550px] overflow-y-scroll">
            {renderListMovie(theater.danhSachPhim)}
          </div>
        ),
      };
    });
  };
  const renderSystemTheater = () => {
    return listTheater.map((sysTheater, index) => {
      return {
        key: index,
        label: <img src={sysTheater.logo} className="w-14 h-14" alt="" />,
        children: (
          <Tabs
            style={{
              height: 550,
            }}
            defaultActiveKey="1"
            items={renderListTheater(sysTheater.lstCumRap)}
            onChange={onChange}
            tabPosition="left"
          />
        ),
      };
    });
  };
  return (
    <div className="max-w-6xl mx-auto border shadow-md border-primary shadow-primary mt-28">
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "rgb(147, 51, 234)",
            },
          },
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={renderSystemTheater()}
          onChange={onChange}
          tabPosition="left"
        />
      </ConfigProvider>
    </div>
  );
};

export default TabMovie;
