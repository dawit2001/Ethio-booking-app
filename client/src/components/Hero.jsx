import React from "react";
import SearchHotel from "../components/SearchHotel";

const Hero = () => {
  return (
    <div className="relative w-full ">
      <div className="lg:px-20 md:px-14 py-20 p-5 text-white flex flex-col gap-2">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-extrabold">
          Find Your Ideal Stay with Ease{" "}
        </h1>
        <p className="md:text-xl text-base font-semibold">
          Look for great deals on hotels, homes, and more.
        </p>
      </div>
      <SearchHotel />
    </div>
  );
};

export default Hero;
