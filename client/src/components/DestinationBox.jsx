import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { GrLocation } from "react-icons/gr";

const Destination = [
  { id: 1, name: "Addis Ababa" },
  { id: 2, name: "Bahir Dar" },
  { id: 3, name: "Desi" },
  { id: 4, name: "Jimma" },
  { id: 5, name: "Adama" },
  { id: 6, name: "Arbaminch" },
  { id: 7, name: "Jigjiga" },
];

export default function DestinationBox() {
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

  return (
    <Combobox value={selectedDestination} onChange={setSelectedDestination}>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Combobox.Button
              className={`${
                open ? "border border-blue-500" : "border border-gray-300"
              } rounded-md p-3 w-full flex gap-1 bg-white h-auto `}
            >
              <GrLocation className="self-center text-2xl text-gray-600" />
              <Combobox.Input
                className={
                  "w-full h-full self-center   outline-none text-sm text-gray-700 font-medium"
                }
                placeholder="where to go ?"
                displayValue={(destination) => destination.name}
                onChange={(event) => setQuery(event.target.value)}
              />
            </Combobox.Button>
            <Combobox.Options
              className={
                " absolute top-full mt-3  w-full z-40 border rounded-md shadow-md p-2 bg-white"
              }
            >
              {filteredDestination.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-sm text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredDestination.map((destination) => (
                  <Combobox.Option key={destination.id} value={destination}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          selected
                            ? "bg-blue-100 text-blue-500"
                            : "text-gray-700  hover:bg-slate-100"
                        } flex gap-3 p-2 cursor-pointer rounded-sm`}
                      >
                        <GrLocation className="self-center text-2xl text-gray-600" />
                        <p className="text-sm font-medium w-[100%] break-words">
                          {destination.name}
                        </p>
                      </li>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </div>
        </>
      )}
    </Combobox>
  );
}
