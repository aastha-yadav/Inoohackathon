import React from "react";
import Navbar from "./Navbar";
import Page1 from "./Page1/Page1";
import CancerChoiceForm from "./CancerChoiceForm";

const HomeAdarsh = () => {
  return (
    <div>
      <div className=" h-screen w-full">
        <Navbar />
        <Page1 />
        <CancerChoiceForm />
      </div>
    </div>
  );
};

export default HomeAdarsh;
