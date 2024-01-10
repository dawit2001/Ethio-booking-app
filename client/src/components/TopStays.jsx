import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Link } from "react-router-dom";

const topHotels = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/hotel/top`,
    {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    }
  );
  const data = await response.data;
  return data;
};
const TopStays = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["topHotel"],
    queryFn: () => topHotels(),
  });
  console.log(topHotels());
  return (
    <div className="w-full md:px-10 sm:px-5 p-0 flex flex-col  gap-4">
      <div className="p-2 w-full text-gray-600 ">
        <h2 className="w-full break-words font-semibold text-3xl py-2">
          Looking for the perfect place to stay?
        </h2>
        <p>Travellers with similar searches viewed these properties </p>
      </div>
      <div className=" flex   w-full h-auto gap-5 overflow-x-auto card-scroll md:p-2 p-1 rounded-2xl">
        {isLoading ? (
          <>
            <CircularProgress />
          </>
        ) : (
          <>
            {data && data.length > 0 && (
              <>
                {data.map((hotel) => (
                  <Link
                    to={`/hotel/search?q=${hotel.name}`}
                    preventScrollReset={true}
                    className="md:min-w-[350px] md:min-h-[200px] min-w-[285px] min-h-[180px]  border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl flex flex-col gap-2 relative"
                  >
                    <img
                      src={hotel.imageUrl}
                      alt=""
                      className="rounded-t-2xl w-full h-[50%]"
                    />
                    <div className="absolute top-5 left-4 text-white font-black text-3xl">
                      <Checkbox
                        icon={
                          <MdOutlineFavoriteBorder className="text-2xl text-white hover:text-blue-500" />
                        }
                        checkedIcon={
                          <MdOutlineFavorite className=" text-2xl" />
                        }
                        className="text-white border  "
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 15 } }}
                      />
                    </div>
                    <div className="p-3 flex flex-col gap-5 text-sm">
                      <div>
                        <p className="text-lg text-gray-800 font-bold">
                          {hotel.name}
                        </p>
                        <p className="text-[14px] text-gray-700 font-normal">
                          {hotel.city}
                        </p>
                      </div>
                      <p className="text-sm text-gray-700">
                        <span className="text-gray-800 font-bold x-5">8.5</span>{" "}
                        Great(12312)
                      </p>
                      <p className="self-end ">starting from </p>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TopStays;
