import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

const Spinner = () => {
  const { isLoading } = useSelector((state) => state.spinnerSlice);
  return isLoading ? (
    <HashLoader
      style={{
        width: "100vw",
        height: "100vh",
        background: "rgb(15 23 42)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99,
      }}
      color="#a855f7"
    />
  ) : (
    <></>
  );
};

export default Spinner;
