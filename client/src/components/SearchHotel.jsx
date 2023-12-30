import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const SearchHotel = () => {
  const [query, setQuery] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    if (!query) return;
    navigate(`/hotel/search?q=${query}`);
  };

  return (
    <div className="w-full md:px-20 px-5 flex justify-center align-middle">
      <div className="relative w-full   md:absolute md:top-[90%] md:w-[85%] p-2 search-radial rounded-md shadow-sm">
        <form
          className="md:relative sm:static flex md:flex-row flex-col gap-1   p-0 "
          onSubmit={handleSubmit}
          action="/signin"
          method="post"
        >
          <input
            type="text"
            className="w-full border-2 border-transparent p-3 outline-none focus:border-b-primary focus:border-2 rounded-md "
            placeholder="where to go ?"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="md:disabled:opacity-50 disabled:cursor-not-allowed p-3 text-sm text-white font-medium bg-primary rounded-lg ring-white">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchHotel;
