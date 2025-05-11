import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/Action/AuthReducer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { Spin } from "antd";

const Login = () => {
  const { loading } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const dets = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(userLogin(dets));
  };
  if (loading) {
    return <Spin />;
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Navbar />
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          className="h-[80vh] w-fit overflow-hidden "
          src="/login3.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={onSubmit}
        className="w-1/2 max-w-md flex flex-col justify-center"
      >
        <h1 className="text-primary md:text-3xl text-3xl font-extrabold flex items-center">
          <Icon
            icon="solar:login-2-linear"
            style={{ color: "royalblue", marginRight: "1vw" }}
          />
          Sign in to your account
        </h1>
        <h3 className="w-full mt-4 text-center lg:text-left lightF">
          Enter your email and password to sign in to your account.
        </h3>

        <div className="flex flex-col items-start w-full gap-2 p-2 mt-6">
          <label className="font-extrabold">
            Enter your Email address <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            placeholder="xyz@abcd.com"
            className="w-full p-2 rounded-xl border-2"
            name="email"
          />
        </div>

        <div className="flex flex-col items-start w-full gap-2 p-2 mt-2">
          <label className="font-extrabold">
            Enter your Password <span className="text-primary">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 rounded-xl border-2"
            name="password"
          />
        </div>
        <NavLink
          to={"/register"}
          className="text-base  cursor-pointer text-blue-500"
        >
          <span className="text-black">Don't have an account ?</span> Register
        </NavLink>
        <button
          type="submit"
          className="bg-blue-400 px-10 py-2 mt-5 rounded-xl text-white text-xl w-full lg:w-auto lg:ml-0 mx-auto"
        >
          Login <i className="ri-arrow-right-wide-line"></i>
        </button>
      </form>
    </div>
  );
};

export default Login;
