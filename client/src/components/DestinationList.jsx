import React from "react";
import MapComponent from "./Mapcomponent";
import MapWithAutocomplete from "./Mapcomponent";
import { Link } from "react-router-dom";

const DestinationList = () => {
  return (
    <div className="w-full md:p-10 sm:px-5 p-0 flex flex-col  gap-4">
      <div className="p-2 w-full text-gray-600 ">
        <h2 className="w-full break-words font-semibold text-3xl py-2">
          Trending destinations
        </h2>
        <p>Explore stays in trending destinations</p>
      </div>
      <div className=" flex   w-full h-auto gap-5 overflow-x-auto card-scroll md:p-2 p-1 rounded-2xl">
        <Link
          to={`/hotel/search?q=addis ababa`}
          preventScrollReset={true}
          className="md:min-w-[380px] md:min-h-[350px] min-w-[285px] min-h-[280px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl flex flex-col gap-2 relative"
        >
          <img
            src="https://cdn.tatlerasia.com/asiatatler/i/ph/2018/11/05181526-story-image-195748_cover_1500x900.jpg"
            alt=""
            className="rounded-t-2xl w-full h-[80%]"
          />
          <h1 className="absolute top-5 left-4 text-white font-black text-3xl">
            Addis Ababa
          </h1>
          <div className="p-3">
            <p className="text-lg text-gray-800 font-bold">Addis Ababa</p>
            <p className="text-[14px] text-gray-700 font-normal">
              123 properties
            </p>
          </div>
        </Link>

        <Link
          to={`/hotel/search?q=addis ababa`}
          preventScrollReset={true}
          className="md:min-w-[380px] md:min-h-[350px] min-w-[285px] min-h-[280px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl flex flex-col gap-2 relative"
        >
          <img
            src="https://aw-d.tripcdn.com/images/200f1a0000018k9hy932A_R_600_400_R5_D.webp"
            alt=""
            className="rounded-t-2xl w-full h-[80%]"
          />
          <h1 className="absolute top-5 left-4 text-white font-black text-3xl">
            Addis Ababa
          </h1>
          <div className="p-3">
            <p className="text-lg text-gray-800 font-bold">Addis Ababa</p>
            <p className="text-[14px] text-gray-700 font-normal">
              123 properties
            </p>
          </div>
        </Link>
        <Link
          to={`/hotel/search?q=addis ababa`}
          preventScrollReset={true}
          className="md:min-w-[380px] md:min-h-[350px] min-w-[285px] min-h-[280px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl flex flex-col gap-2 relative"
        >
          <img
            src="https://cdn.tatlerasia.com/asiatatler/i/ph/2018/11/05181526-story-image-195748_cover_1500x900.jpg"
            alt=""
            className="rounded-t-2xl w-full h-[80%]"
          />
          <h1 className="absolute top-5 left-4 text-white font-black text-3xl">
            Addis Ababa
          </h1>
          <div className="p-3">
            <p className="text-lg text-gray-800 font-bold">Addis Ababa</p>
            <p className="text-[14px] text-gray-700 font-normal">
              123 properties
            </p>
          </div>
        </Link>
        <Link
          to={`/hotel/search?q=addis ababa`}
          preventScrollReset={true}
          className="md:min-w-[380px] md:min-h-[350px] min-w-[285px] min-h-[280px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl flex flex-col gap-2 relative"
        >
          <img
            src="https://aw-d.tripcdn.com/images/200513000000vezwrAB70_R_600_400_R5_D.webp"
            alt=""
            className="rounded-t-2xl w-full h-[80%]"
          />
          <h1 className="absolute top-5 left-4 text-white font-black text-3xl">
            Addis Ababa
          </h1>
          <div className="p-3">
            <p className="text-lg text-gray-800 font-bold">Addis Ababa</p>
            <p className="text-[14px] text-gray-700 font-normal">
              123 properties
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DestinationList;
