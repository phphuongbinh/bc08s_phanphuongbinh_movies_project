import React from "react";
import Header from "../components/Header/Header";
import Banner from "../pages/Home/Banner";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="App bg-gradient-to-bl from-[hsl(169,75%,69%)] to-[hsl(229,52%,79%)] p-3 sm:p-4 md:p-6 lg:p-8 xl:p-16">
      <div className="relative rounded-md app-container sm:rounded-lg lg:rounded-3xl ">
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
