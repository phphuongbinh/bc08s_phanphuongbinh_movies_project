import React from "react";
import Header from "../components/Header/Header";
import Banner from "../pages/Home/Banner";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="App bg-gradient-to-b from-[hsl(169,75%,69%)] to-[hsl(229,52%,79%)] px-16 py-16">
      <div className="app-container relative ">
        <Header />
        <div className="relative">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
