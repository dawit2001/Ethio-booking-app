import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchHotel from "../components/SearchHotel";

const Home = () => {
  return (
    <div className=" w-full h-screen p-0 m-0 relative flex flex-col  ">
      <div className="w-full bg-radial">
        <Header />
        {/* <Navbar /> */}
        <div className="relative w-full ">
          <div className="md:  px-20 py-20 text-white flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold">
              Find Your Ideal Stay with Ease{" "}
            </h1>
            <p className="text-xl font-semibold">
              Look for great deals on hotels, homes, and more.
            </p>
          </div>
          <SearchHotel />
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-10 py-40">
        <div className="w-full px-20 flex flex-col  gap-4">
          <div className="p-2 w-full text-gray-600 ">
            <h2 className=" font-semibold text-3xl py-2">
              Trending destinations
            </h2>
            <p>Explore stays in trending destinations</p>
          </div>
          <div className=" flex  w-full h-auto gap-5 md:overflow-x-auto card-scroll p-2">
            <div className="min-w-[300px] min-h-[200px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[300px] min-h-[200px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
          </div>
        </div>
        <div className="w-full px-20 flex flex-col  gap-4">
          <div className="p-2 w-full text-gray-600">
            <h2 className=" font-semibold text-3xl py-2">Offers</h2>
            <p>Special offers for you</p>
          </div>
          <div className=" flex  w-full h-auto gap-5 md:overflow-x-auto card-scroll p-2">
            <div className="min-w-[350px] min-h-[450px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
            <div className="min-w-[350px] min-h-[450px] border bg-white shadow-lg  shaodw-gray-500  rounded-md"></div>
          </div>
        </div>{" "}
        <div className="w-full px-20 flex flex-col  gap-4">
          <div className="p-2 w-full text-gray-600">
            <h2 className=" font-semibold text-3xl">Browse by property type</h2>
          </div>
          <div className=" flex  w-full h-auto gap-5 md:overflow-x-auto card-scroll p-2">
            <div className="min-w-[350px] min-h-[300px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[300px] border bg-white shadow-lg  shaodw-gray-500  rounded-2xl"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
