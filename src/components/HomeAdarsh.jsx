import React from "react";
import Navbar from "./Navbar";
import Page1 from "./Page1/Page1";
import CancerChoiceForm from "./CancerChoiceForm";
import Imp from "./Imp";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import History from "./History/History";

const HomeAdarsh = () => {
  return (
    <div>
        <Navbar />
      <div className=" h-screen w-full">
        <Page1 />
        {/* <Profile/> */}
        {/* <History/> */}
        <CancerChoiceForm />
        <Imp/>
      <Footer/>
      </div>
    </div>
  );
};

export default HomeAdarsh;
