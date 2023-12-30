import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Attractions = () => {
  return (
    <div className=" w-full h-screen p-0 m-0 relative flex flex-col  ">
      <div className="w-full bg-radial">
        <Header />
        <Navbar />
      </div>
      <div className="px-20  w-full flex flex-col mb-5">
        <p className="self-center"> Attractions</p>
      </div>
      <Footer />
    </div>
  );
};

export default Attractions;
