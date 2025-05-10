import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../store/Action/AuthReducer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const dets = {
      firstname: e.target.firstName.value,
      lastname: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(userRegister(dets));
  };
  return (
    <div className="w-full h-screen relative pt-[18vh] overflow-y-auto flex items-center justify-center">
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
          Register here
        </h1>
        <h3 className="w-full mt-4 text-center lg:text-left lightF">
          Enter the following detail to register.
        </h3>
        <div className="flex flex-col items-start w-full gap-2 p-2 mt-6">
          <label className="font-extrabold">
            Enter your First Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 rounded-xl border-2"
            name="firstName"
          />
        </div>
        <div className="flex flex-col items-start w-full gap-2 p-2 mt-6">
          <label className="font-extrabold">
            Enter your Last Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 rounded-xl border-2"
            name="lastName"
          />
        </div>
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
          to={"/login"}
          className="text-base  cursor-pointer text-blue-500"
        >
          <span className="text-black">have an account ?</span> Login
        </NavLink>
        <button
          type="submit"
          className="bg-blue-400 px-10 py-2 mt-5 rounded-xl text-white text-xl w-full lg:w-auto lg:ml-0 mx-auto"
        >
          Register <i className="ri-arrow-right-wide-line"></i>
        </button>
      </form>
    </div>
  );
};

export default Register;
