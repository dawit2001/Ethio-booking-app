import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchHotel from "../components/SearchHotel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SearchResult = () => {
  return (
    <div className=" w-full h-screen p-0 m-0 relative flex flex-col  gap-20">
      <div className="w-full bg-radial">
        <Header />
        <div className="relative w-full h-20 ">
          <SearchHotel />
        </div>
      </div>
      <div className="px-28 flex gap-5">
        <div className="flex flex-col gap-2 min-w-[350px] p-2  ">
          <div className="w-full min-h-[200px] border bg-white md:shadow-lg  shaodw-gray-500   rounded-2xl"></div>
          <div className="border border-gray-300 rounded-lg shadow-md bg-white flex flex-col divide-y">
            <div className="w-full flex flex-col gap-2 p-4">
              <p className="text-gray-700 font-semibold">Search Hotels</p>
              <input
                type="text"
                className="p-3 border rounded-md outline-none"
              />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg  p-4">
              Filter by:
            </h2>
            <div className="flex flex-col gap-4 p-4 justify-start">
              <h2 className=" text-gray-700 font-medium text-md  ">
                Popular filters
              </h2>
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <div className="  hover:bg-slate-100 rounded-full">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value={"checkbox1"}
                    className="w-[18px] h-[18px]  md:accent-blue-500  "
                  />
                </div>
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px] "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  border border-teal-900 rounded-md checked:"
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>{" "}
              <div className="flex gap-4 text-gray-700 text-[14px] font-medium">
                <input
                  type="checkbox"
                  id="checkbox1"
                  name="checkbox1"
                  value={"checkbox1"}
                  className="w-[18px] h-[18px]  md:accent-blue-500  "
                />
                <label htmlFor="checkbox1">All inclusive</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between">
            <div>300+ properties</div>
            <div action="" className="border rounded-md">
              sort
            </div>
          </div>
          <div className="w-full rounded-md p-4 bg-white"> advert</div>
          <div className="w-full rounded-md p-2 bg-white"> advert</div>
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[200px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
                <p className="w-[200px] md:break-words text-[13px]">
                  alskdjflaksjdflkajsdlfkja;sldkjflaskdjflaskjdfljasldfjlasdkjflaksjdlfkjasldfjlasdkjflaksjdflkjasldkfjlaskdjflaksjdflkasjdlfjasldkfjaksalskdjf;aksjdf;lkjas;ldkfja;lskdjfalskdjfla;skdjfalsdkjfal;skdjflasdkjflaskdjfl;askdjf
                </p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-full rounded-2xl shadow-lg border bg-white min-h-[300px] flex gap-5">
            <div className="min-w-[250px] h-full rounded-l-2xl bg-blue-500"></div>
            <div className="flex flex-col w-full justify-between">
              <div className="p-4 flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold text-blue-500 hover:text-black">
                  Hotel name
                </h1>
                <p>location</p>
              </div>
              <div className="flex justify-between border w-full">
                <div className="p-4 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-lg bg-green-500 text-white text-center font-medium ">
                      8.6
                    </div>
                    <div className="text-gray-800 text-sm">
                      <p>Excellent</p>
                      <p className="text-[12px]">1232 reviews</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 self-end p-2">
                  <p className="text-[12px] text-gray-600">laskdjf</p>
                  <p className="text-lg font-medium text-gray-800">$laskdjf</p>
                  <p className="text-sm text-gray-500">
                    including taxes and charges
                  </p>
                  <div className="self-end text-sm  px-2 py-1 text-white bg-green-600 rounded-md">
                    some credit
                  </div>
                  <button className="text-white p-2 text-center rounded-md bg-primary ">
                    see availablity
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
