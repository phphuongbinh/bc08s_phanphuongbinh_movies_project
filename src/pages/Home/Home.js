import React from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { info } = useSelector((state) => state.userReducer);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
