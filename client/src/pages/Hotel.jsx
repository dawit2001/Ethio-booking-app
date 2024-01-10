import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { FaSpa } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoStarFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Mapcomponent from "../components/Mapcomponent";
import AvailablityBox from "../components/AvailablityBox";
const Hotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  console.log(id);
  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  const renderStars = (n) => {
    const stars = [];
    for (let i = 0; i < n; i++)
      stars.push(<GoStarFill className="text-yellow-400" key={i} />);
    return stars;
  };
  useEffect(() => {
    const getHotel = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/hotel/${id}`
        );
        const data = await response.data;
        console.log(data);

        setHotel(data);
      } catch (e) {
        console.log(e);
      }
    };
    getHotel();
  }, [id]);
  console.log(hotel);
  return (
    <div className=" w-full h-screen p-0 m-0 relative flex flex-col  ">
      <div className="w-full bg-radial">
        <Header />
        <Navbar />
      </div>
      <div className="px-20  w-full flex flex-col mb-5">
        {hotel ? (
          <>
            <button
              onClick={() => navigate(-1)}
              className="text-sm  p-4 text-blue-500 font-medium flex "
            >
              <span className="self-center ">
                <IoMdArrowBack />
              </span>
              see all properties
            </button>
            <div className="w-full flex justify-between   px-10 ">
              <div className=" flex flex-col gap-3 p-3 ">
                <h1 className="text-4xl font-medium text-gray-800 ">
                  {capitalizeFirstLetter(hotel.name)}
                </h1>
                <div className="flex ">
                  {renderStars(hotel.rating).map((star) => star)}
                </div>
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

            <div className="w-full grid grid-cols-4  gap-1 h-[500px]">
              <div className="md:col-span-2 row-span-2  rounded-md bg-white shadow-lg  object-contain overflow-hidden border-3 border-blue-700">
                <img
                  src={hotel.imageUrl}
                  alt={`${hotel.name} pic`}
                  className="w-full h-full"
                />
              </div>
              <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden  ">
                <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
              </div>
              <div className="w-full h-[250px] border rounded-md bg-white shadow-lg   object-cover overflow-hidden">
                <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
              </div>
              <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden  ">
                <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
              </div>
              <div className="w-full h-[250px] border rounded-md bg-white shadow-lg   object-cover overflow-hidden">
                <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
              </div>
            </div>
            <div className="w-full h-full break-words p-10 text-gray-800 text-sm">
              <p>{hotel.description}</p>
            </div>
            <ul className="w-full px-10  bg-white flex gap-5 text-sm font-normal sticky top-0 border-b z-40  ">
              <button className="py-3  hover:border-b-2 hover:border-gray-800 md:hover:transition-opacity duration-100">
                Overview
              </button>
              <button className="py-3 border-b-2 border-blue-500 ">
                Rooms
              </button>
              <button className="py-3 border-b-2 border-blue-500 ">
                Location
              </button>
              <button className="py-3 border-b-2 border-blue-500 ">
                Amenities
              </button>
              <button className="py-3 border-b-2 border-blue-500 ">
                Polices
              </button>
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
                  <div className="w-full h-[300px] border rounded-2xl ">
                    <Mapcomponent location={[hotel.long, hotel.lat]} />
                  </div>
                  <p className="p-2 text-sm text-gray-700">
                    Website{" "}
                    <span className="text-sm text-blue-700">
                      <Link to={hotel.webSite} target="_blank">
                        {capitalizeFirstLetter(hotel.name)}
                      </Link>
                    </span>
                  </p>
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
              <h1 className="text-gray-800 font-medium  text-xl">
                Availablity
              </h1>
              <div className="w-full ">
                <AvailablityBox />
              </div>
              <div className="w-full grid grid-cols-3  gap-1">
                <div className="md:w-full  h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
                </div>
                <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
                </div>
                <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
                </div>{" "}
                <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
                </div>{" "}
                <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
                </div>{" "}
                <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
                </div>{" "}
                <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img src={hotel.imageUrl} alt={`${hotel.name} pic`} />
                </div>{" "}
                <div className="w-full h-[250px] border rounded-md bg-white shadow-lg object-cover overflow-hidden">
                  <img
                    src={hotel.imageUrl}
                    alt={`${hotel.name} pic`}
                    className=""
                  />
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
          </>
        ) : (
          <div className="w-full flex justify-center align-middle">
            <p className="text-gray-700 font-bold text-xl">Not found</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
