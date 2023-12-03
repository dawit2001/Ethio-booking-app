import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchHotel from "../components/SearchHotel";
import Hero from "../components/Hero";
import DestinationList from "../components/DestinationList";
import PropertyList from "../components/PropertyList";
import TopStays from "../components/TopStays";

const Home = () => {
  return (
    <div className=" w-full h-screen p-0 m-0 relative flex flex-col  ">
      <div className="w-full bg-radial">
        <Header />
        <Navbar />
        <Hero />
      </div>
      <div className="w-full flex flex-col gap-5 md:py-16 md:px-10 p-5">
        <DestinationList />
        <TopStays />
        <PropertyList />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
