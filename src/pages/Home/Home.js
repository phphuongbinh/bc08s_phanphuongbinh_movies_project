import React from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { info } = useSelector((state) => state.userReducer);
  console.log(info);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
