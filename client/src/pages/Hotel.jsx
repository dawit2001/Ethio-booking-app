import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchHotel from "../components/SearchHotel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { FaSpa } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const Hotel = () => {
  return (
    <div className=" w-full h-screen p-0 m-0 relative flex flex-col ">
      <div className="w-full bg-radial">
        <Header />
      </div>
      <div className="px-20  w-full flex flex-col mb-5">
        <Link
          to="/searchResults"
          className="text-sm  p-4 text-blue-500 font-medium flex "
        >
          <span className="self-center ">
            <IoMdArrowBack />
          </span>
          see all properties
        </Link>

        <div className="w-full flex justify-between   px-10 ">
          <div className=" flex flex-col gap-3 p-3 ">
            <h1 className="text-4xl font-medium text-gray-800 ">Hotels name</h1>
            <div>stars</div>
            <p>descriptions</p>
          </div>
          <div className="relative self-center">
            <Checkbox
              icon={
                <MdOutlineFavoriteBorder className="text-2xl text-gray-700 hover:text-blue-500" />
              }
              checkedIcon={<MdOutlineFavorite className=" text-2xl" />}
              className="text-blue-500 border  "
              sx={{ "& .MuiSvgIcon-root": { fontSize: 15 } }}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-4  gap-1">
          <div className="md:col-span-2 row-span-2 border rounded-md bg-white shadow-lg">
            alskdjflkasjdf
          </div>
          <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
            alskdjflkasjdf
          </div>
          <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
            alskdjflkasjdf
          </div>{" "}
          <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
            alskdjflkasjdf
          </div>{" "}
          <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
            alskdjflkasjdf
          </div>{" "}
        </div>
        <ul className="w-full px-10  bg-white flex gap-5 text-sm font-normal  ">
          <button className="py-3  hover:border-b-2 hover:border-gray-800 md:hover:transition-opacity duration-100">
            Overview
          </button>
          <button className="py-3 border-b-2 border-blue-500 ">Rooms</button>
          <button className="py-3 border-b-2 border-blue-500 ">Location</button>
          <button className="py-3 border-b-2 border-blue-500 ">
            Amenities
          </button>
          <button className="py-3 border-b-2 border-blue-500 ">Polices</button>
        </ul>
        <div className="w-full bg-white p-4">
          <div className="flex gap-4">
            <span className="p-3 text-center bg-green-800 text-white text-sm font-medium rounded-md">
              8.9
            </span>
            <span className="self-center text-xl text-gray-800 font-medium">
              Excellent
            </span>
          </div>
          <button className="text-blue-600 text-sm font-medium flex gap-2 py-3 hover:underline ">
            see all 1231 reviews{" "}
            <span className="self-center">
              <IoChevronForward />
            </span>
          </button>
          <div className="grid grid-cols-2">
            <div className="w-full ">
              <h1 className="text-xl text-gray-800 font-bold">
                Popular Amenities
              </h1>
              <ul className="grid grid-cols-2 w-full p-10">
                <div className="flex flex-col gap-8">
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>{" "}
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>{" "}
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>{" "}
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>{" "}
                </div>
                <div className="flex flex-col gap-8">
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>{" "}
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>{" "}
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>{" "}
                  <li className="flex gap-2">
                    <FaSpa />
                    <p>Spa</p>
                  </li>
                </div>
              </ul>
              <button className="text-blue-600 text-sm font-medium flex gap-2 p-5 hover:underline ">
                see all
                <span className="self-center">
                  <IoChevronForward />
                </span>
              </button>
            </div>
            <div className="w-full  rounded-md  px-10">
              <div className="w-full h-[300px] border rounded-2xl "></div>
              <p className="p-2">Address</p>
              <button className="text-blue-600 text-sm font-medium flex gap-2 py-3 hover:underline ">
                see all 1231 reviews{" "}
                <span className="self-center">
                  <IoChevronForward />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 relative flex flex-col gap-5">
          <h1 className="text-gray-800 font-semibold  text-3xl">
            Room Options
          </h1>
          <h1 className="text-gray-800 font-medium  text-xl">Availablity</h1>
          <SearchHotel />
          <div className="w-full grid grid-cols-4  gap-1">
            <div className="md:w-full border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>
            <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>
            <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>{" "}
            <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>{" "}
            <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>{" "}
            <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>{" "}
            <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>{" "}
            <div className="w-full h-[250px] border rounded-md bg-white shadow-lg">
              alskdjflkasjdf
            </div>{" "}
          </div>
        </div>

        <div className="w-full  flex flex-col  gap-4">
          <div className="p-2 w-full text-gray-600">
            <h2 className=" font-medium text-2xl">Similar properties</h2>
          </div>
          <div className=" flex  w-full h-auto gap-5 md:overflow-x-auto card-scroll p-2 rounded-2xl">
            <div className="min-w-[350px] min-h-[500px] border bg-white md:  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
            <div className="min-w-[350px] min-h-[500px] border bg-white  rounded-2xl"></div>
          </div>
        </div>
        <div className="bg-white ">
          <div className="">Guest Reviews</div>
          <h1>categories</h1>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
            <div className="flex flex-col gap-1">
              <p>staff</p>
              <div className="w-full h-[10px] bg-blue-800 rounded-2xl "></div>
            </div>
          </div>
          <div className="w-full px-10 flex flex-col  gap-4 py-2">
            <div className="p-y w-full text-gray-600">
              <h2 className=" font-medium text-base">
                {" "}
                see what peope say about this please
              </h2>
            </div>
            <div className=" flex  w-full h-auto gap-5 md:overflow-x-auto card-scroll p-2 rounded-2xl">
              <div className="min-w-[350px] min-h-[300px] border bg-white md:  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
              <div className="min-w-[350px] min-h-[300px] border bg-white  rounded-2xl"></div>
            </div>
            <button className="text-blue-600 text-sm font-medium flex gap-2 p-5 hover:underline ">
              see all reviews
              <span className="self-center">
                <IoChevronForward />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
