import React from "react";

const Tag = ({ title }) => {
  return (
    <span className="px-2 py-1 border border-gray-300 rounded-lg backdrop-blur-xl bg-white/40 hover:bg-white/30 duration-300">
      {title}
    </span>
  );
};

export default Tag;
