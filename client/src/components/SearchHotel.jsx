import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import DestinationBox from "./DestinationBox";
import { addDays } from "date-fns";
import CalenderBox from "./Calender";
import NoOfGuestsBox from "./NoOfGuestsBox";

const Destination = [
  { id: 1, name: "Addis Ababa" },
  { id: 2, name: "Bahir Dar" },
  { id: 3, name: "Desi" },
  { id: 4, name: "Jimma" },
  { id: 5, name: "Adama" },
  { id: 6, name: "Arbaminch" },
  { id: 7, name: "Jigjiga" },
];

const SearchHotel = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    Destination[0]
  );
  const [query, setQuery] = useState("");

  const filteredDestination =
    query === ""
      ? Destination
      : Destination.filter((destination) =>
          destination.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [dayAdd, setDayAdd] = useState(0);
  const [GuestOptions, setGuestOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const [childAge, setChildAge] = useState(
    new Array(GuestOptions.children).fill("")
  );
  const [AgeError, setAgeError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);
  const handleOption = (name, operation) => {
    setGuestOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "+" ? GuestOptions[name] + 1 : GuestOptions[name] - 1,
      };
    });
  };

  const handleSelectChange = (e, i) => {
    setAgeError(false);
    const value = e.target.value;
    setChildAge((prevChildAge) => {
      const newChildAge = [...prevChildAge];
      newChildAge[i] = value;
      return newChildAge;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(childAge);
    if (childAge.includes("")) {
      console.log(childAge);
      setAgeError(true);
    }
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
          <DestinationBox />
          <CalenderBox
            setDate={setDate}
            date={date}
            dayAdd={dayAdd}
            setDayAdd={setDayAdd}
          />
          <NoOfGuestsBox
            GuestOptions={GuestOptions}
            handleOption={handleOption}
            childAge={childAge}
            handleSelectChange={handleSelectChange}
            AgeError={AgeError}
          />
          <button
            disabled={AgeError || destinationError}
            className="md:disabled:opacity-50 disabled:cursor-not-allowed p-3 text-sm text-white font-medium bg-primary rounded-lg"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchHotel;
