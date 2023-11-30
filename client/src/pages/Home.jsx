import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white w-screen h-screen p-0 m-0 relative flex flex-col justify-between">
      <div>
        <Header />
        <Navbar />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
