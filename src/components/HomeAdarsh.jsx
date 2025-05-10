import React from "react";
import Navbar from "./Navbar";
import Page1 from "./Page1/Page1";
import CancerChoiceForm from "./CancerChoiceForm";
import Imp from "./Imp";

const HomeAdarsh = () => {
  return (
    <div>
        <Navbar />
      <div className=" h-screen w-full">
        <Page1 />
        <CancerChoiceForm />
        <Imp/>
      </div>
    </div>
  );
};

export default HomeAdarsh;
