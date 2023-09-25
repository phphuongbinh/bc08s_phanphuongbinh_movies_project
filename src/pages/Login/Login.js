import React from "react";
import Form from "./Form";
import Banner from "./Banner";
import { useSelector } from "react-redux";

const Login = () => {
  const { info } = useSelector((state) => state.userReducer);
  console.log(info);
  return (
    <div className="h-screen bg-gradient-to-tr from-[#e9d8fd] via-[#caccf7] to-[#a6c1ee] flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl flex gap-x-5 shadow shadow-purple-300 flex items-center">
        <Banner />
        <Form />
      </div>
    </div>
  );
};

export default Login;
