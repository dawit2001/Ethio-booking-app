import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { SlCalender } from "react-icons/sl";
import { addDays, format } from "date-fns";
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

const dayAddOptions = [0, 1, 2, 3, 7];
export default function CalenderBox({ date, setDate, setDayAdd, dayAdd }) {
  return (
    <Combobox>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Combobox.Button
              className={`${
                open ? "border border-blue-500" : "border border-gray-300"
              } rounded-md p-3 w-full flex gap-3 bg-white `}
            >
              <SlCalender className="self-center text-2xl text-gray-600" />
              <div className="self-center text-gray-800 text-sm font-medium  flex  gap-2">
                <p className="self-center">{`${format(
                  date[0].startDate,
                  "EEE, MMM d"
                )} `}</p>
                <div className="border-t-2 border-gray-700 w-4 h-[1px] self-center"></div>
                <p className="self-center ">
                  {format(date[0].endDate, "EEE, MMM d")}
                </p>

                <span className="self-center mx-2">
                  {" "}
                  ({"\u00B1"} {dayAdd} )
                </span>
              </div>
            </Combobox.Button>

            <Combobox.Options
              className={
                " absolute top-full mt-3   z-40 border rounded-md shadow-md p-2 bg-white"
              }
            >
              <div className=" flex flex-col gap-2">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {
                    let newSelection = item.selection;
                    if (item.selection.endDate === item.selection.startDate)
                      newSelection.endDate = addDays(newSelection.startDate, 1);

                    setDate([newSelection]);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  months={2}
                  direction="horizontal"
                />
                <div className="flex flex-col gap-5 p-3 border-t">
                  <MyRadioGroup setDayAdd={setDayAdd} dayAdd={dayAdd} />
                </div>
              </div>
            </Combobox.Options>
          </div>
        </>
      )}
    </Combobox>
  );
}

import { RadioGroup } from "@headlessui/react";

function MyRadioGroup({ dayAdd, setDayAdd }) {
  const checkOption = (day) => {
    if (day === 0) return "Exact dates";
    else if (day === 1)
      return (
        <>
          <span className="text-xl font-medium "> {"\u00B1"} </span>{" "}
          <span className="self-center mx-2">{day} day</span>
        </>
      );
    else
      return (
        <>
          <span className="text-xl font-medium "> {"\u00B1"} </span>{" "}
          <span className="self-center mx-2">{day} days</span>
        </>
      );
  };
  return (
    <RadioGroup value={dayAdd} onChange={setDayAdd} className={"flex gap-3"}>
      {dayAddOptions.map((day) => (
        <RadioGroup.Option key={day} value={day} as={Fragment} className={" "}>
          {({ active, checked }) => (
            <li
              className={`${
                active || checked
                  ? "bg-[#719dee2d] border-primary text-primary"
                  : "hover:bg-[#719dee31] text-gray-700 border-gray-400  hover:border-gray-400"
              } border rounded-3xl p-2 px-3 font-normal text-sm  cursor-pointer flex align-middle justify-center`}
            >
              {checkOption(day)}
            </li>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
