import React from "react";
import { Link } from "react-router-dom";

const TabletHeader = ({ renderUserNav }) => {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-20 bg-transparent">
      <div className="flex items-center justify-between h-full mx-auto max-w-[90%]">
        <Link to={"/"} className="flex items-end">
          <img
            src={process.env.PUBLIC_URL + "/img/favicon.ico"}
            className="w-10 h-10"
            alt="logo"
          />
          <span className="text-[20px] leading-none font-semibold text-purple-500">
            licks
          </span>
        </Link>
        <div className="flex items-center gap-x-3">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default TabletHeader;
