import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Logout from "./components/Logout";
import HomeAdarsh from "./components/HomeAdarsh";
import Login from "./components/Login";
import BreastCancerUploadPage from "./Pages/BreastCancerUpload";
import PreExaminationChat from "./components/Breast/PreExamine";
import Register from "./components/Register";
import { useDispatch, useSelector } from "react-redux";
import { isUser } from "./store/Action/AuthReducer";

const AllRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomeAdarsh />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />

      {isAuthenticated ? (
        <>
          <Route path="/breast" element={<BreastCancerUploadPage />} />
          <Route path="/breastExamine" element={<PreExaminationChat />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default AllRoutes;
