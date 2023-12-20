import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchHotel from "../components/SearchHotel";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Mapcomponent from "../components/Mapcomponent";
import { GoStarFill } from "react-icons/go";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const SearchResult = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [currentMap, setCurrentMap] = useState([9.0192, 38.7525]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [result, setResult] = useState(null);
  const searchQuery = searchParams.get("q");
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
    const search = async () => {
      try {
        console.log("search");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/hotel/search?q=${searchQuery}`
        );
        const data = await response.data;
        setResult(data);
      } catch (e) {
        console.log(e);
      }
    };
    search();
  }, [searchQuery]);
  console.log(currentMap);
  return (
    <div className=" w-full h-screen p-0 m-0 relative flex flex-col  gap-20">
      <div className="w-full bg-radial">
        <Header />
        <Navbar />
        <div className="relative w-full h-20 ">
          <SearchHotel />
        </div>
      </div>
      <div className="w-full  p-10 bg-white flex flex-col gap-10 justify-center align-middle">
        {result && result.length > 0 ? (
          <>
            {result.map((hotel) => (
              <div
                key={hotel.id}
                className="w-[80%] h-[250px] self-center bg-white flex gap-5 border rounded-lg shadow-lg "
              >
                <div className="w-[350px] h-full flex flex-col gap-0">
                  <div className="w-full  rounded-l-lg object-fit overflow-hidden">
                    <img
                      src={hotel.imageUrl}
                      alt={`${hotel.name}  image`}
                      className="w-full h-[250px]"
                    />
                  </div>
                </div>
                <div className="pt-10 flex justify-between w-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex ">
                      {renderStars(hotel.rating).map((star, i) => star)}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/hotel/${hotel.id}/${hotel.name}`}
                        className="text-blue-600 hover:text-gray-600 font-semibold text-2xl "
                      >
                        {capitalizeFirstLetter(hotel.name)}
                      </Link>
                      <button
                        className="self-start text-blue-500 text-sm font-medium hover:underline"
                        onClick={() => {
                          setOpen(true);
                          setCurrentMap([hotel.long, hotel.lat]);
                        }}
                      >
                        {capitalizeFirstLetter(hotel.streetAddress)},
                        {capitalizeFirstLetter(hotel.city)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex md:justify-center align-middle ">
            <p className="self-center font-bold text-xl text-gray-600 ">
              Not Found
            </p>
          </div>
        )}
      </div>

      <Footer />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div
          className="w-[90%] flex gap-5 bg-white h-[90%] rounded-lg shadow-lg z-40"
          onClick={() => setOpen(true)}
        >
          {console.log(currentMap)}
          <Mapcomponent location={currentMap} />
        </div>
      </Backdrop>
    </div>
  );
};

export default SearchResult;
