import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-[#161616]" >
        <Navbar />
      </div>{" "}
      {/* Navbar will be present across all pages */}
      <div>
        <Outlet /> {/* Render the child route here */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
