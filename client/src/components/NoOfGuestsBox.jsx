import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

const AgeOptions = [
  { id: 1, value: "", name: "Age needed" },
  { id: 2, value: 0, name: "under 1" },
  { id: 3, value: 1, name: "1 years old" },
  { id: 4, value: 2, name: "2 years old" },
  { id: 5, value: 3, name: "3 years old" },
  { id: 6, value: 4, name: "4 years old" },
  { id: 7, value: 5, name: "5 years old" },
  { id: 8, value: 6, name: "6 years old" },
  { id: 9, value: 7, name: "7 years old" },
  { id: 10, value: 8, name: "8 years old" },
  { id: 11, value: 9, name: "9 years old" },
  { id: 12, value: 10, name: "10 years old" },
  { id: 13, value: 11, name: "11 years old" },
  { id: 14, value: 12, name: "12 years old" },
  { id: 15, value: 13, name: "13 years old" },
  { id: 16, value: 14, name: "14 years old" },
  { id: 17, value: 15, name: "15 years old" },
  { id: 18, value: 16, name: "16 years old" },
  { id: 19, value: 17, name: "17 years old" },
];

export default function NoOfGuestsBox({
  GuestOptions,
  handleOption,
  handleSelectChange,
  childAge,
  AgeError,
}) {
  const SelectChildAge = (n) => {
    const component = [];
    for (let i = 0; i < n; i++) {
      const Age = childAge[i] || "";
      component.push(
        <select
          name="selectAge"
          id={`select${i}`}
          onChange={(e) => {
            handleSelectChange(e, i);
          }}
          className={`p-2 w-full border ${
            Age === "" ? "border-danger" : "border-gray-400"
          }   bg-slate-50 rounded-[4px] outline-none text-gray-700 text-sm`}
        >
          {AgeOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      );
    }
    return component;
  };
  console.log(AgeError);
  return (
    <Combobox open={true}>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Combobox.Button
              className={`${
                open ? "border border-blue-500" : "border border-gray-300"
              } rounded-md p-3 w-full flex gap-3 bg-white `}
            >
              <IoPersonOutline className="self-center text-2xl text-gray-600" />
              <div className="self-center w-full text-sm  text-gray-700 font-medium flex sm:flex-row sm:gap-2 gap-0">
                <span>{GuestOptions.adults} Adults .</span>
                <span>{GuestOptions.children} Children .</span>
                <span>{GuestOptions.room} Rooms </span>
              </div>
            </Combobox.Button>
            <Combobox.Options
              className={
                " absolute top-full mt-3  w-full z-40 border rounded-md shadow-md p-7 bg-white flex flex-col gap-2"
              }
              static={AgeError}
            >
              <div className="OptionContainer ">
                <p className="w-full self-center">Adults</p>
                <div className="OptionCounter">
                  <button
                    type="button"
                    disabled={GuestOptions.adults <= 0}
                    className={`counterBtn`}
                    onClick={() => handleOption("adults", "-")}
                  >
                    <AiOutlineMinus className="text-[#0077ffc0]" />
                  </button>
                  <p className="p-3 ">{GuestOptions.adults}</p>
                  <button
                    type="button"
                    disabled={GuestOptions.adults >= 30}
                    className={`counterBtn`}
                    onClick={() => handleOption("adults", "+")}
                  >
                    <FaPlus className="text-[#0077ffc0]" />
                  </button>
                </div>
              </div>{" "}
              <div className="flex flex-col gap-1">
                <div className="OptionContainer ">
                  <p className="w-full self-center">Children</p>
                  <div className="OptionCounter">
                    <button
                      type="button"
                      disabled={GuestOptions.children <= 0}
                      className={`counterBtn`}
                      onClick={() => handleOption("children", "-")}
                    >
                      <AiOutlineMinus className="text-[#0077ffc0]" />
                    </button>
                    <p className="p-3 ">{GuestOptions.children}</p>
                    <button
                      type="button"
                      disabled={GuestOptions.children >= 10}
                      className={`counterBtn`}
                      onClick={() => handleOption("children", "+")}
                    >
                      <FaPlus className="text-[#0077ffc0]" />
                    </button>
                  </div>
                </div>{" "}
                {GuestOptions.children >= 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    {SelectChildAge(GuestOptions.children).map(
                      (component, i) => (
                        <div key={i}>{component}</div>
                      )
                    )}
                  </div>
                )}
              </div>
              <div className="OptionContainer ">
                <p className="w-full self-center">Rooms</p>
                <div className="OptionCounter">
                  <button
                    type="button"
                    disabled={GuestOptions.room <= 0}
                    className={`counterBtn`}
                    onClick={() => handleOption("room", "-")}
                  >
                    <AiOutlineMinus className="text-[#0077ffc0]" />
                  </button>
                  <p className="p-3 ">{GuestOptions.room}</p>
                  <button
                    type="button"
                    disabled={GuestOptions.room >= 30}
                    className={`counterBtn`}
                    onClick={() => handleOption("room", "-")}
                  >
                    <FaPlus className="text-[#0077ffc0]" />
                  </button>
                </div>
              </div>
            </Combobox.Options>
          </div>
        </>
      )}
    </Combobox>
  );
}
