import React from "react";
import { NavLink } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { BsCarFront } from "react-icons/bs";
import { MdAttractions } from "react-icons/md";
import { BsTaxiFront } from "react-icons/bs";

const links = [
  {
    title: "Stays",
    path: "/",
    Icon: <IoBedOutline className="self-center text-lg" />,
  },
  {
    title: "Flights",
    path: "/flights",
    Icon: <PiAirplaneTakeoffLight className="self-center text-lg" />,
  },
  {
    title: "Car rentials",
    path: "/cars",
    Icon: <BsCarFront className="self-center text-lg" />,
  },
  {
    title: "Attractions",
    path: "/attractions",
    Icon: <MdAttractions className="self-center text-lg font-thin" />,
  },
  {
    title: "Airport taxis",
    path: "/taxis",
    Icon: <BsTaxiFront className="self-center text-lg" />,
  },
];

const Navbar = () => {
  return (
    <div className="hidden w-full md:flex px-20 py-3  gap-3 ">
      {links.map((link, i) => (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "md:cursor-not-allowed rounded-full hover:bg-[#ffffff18] p-3 text-white font-light flex gap-1"
              : isActive
              ? "border border-white rounded-full p-3 text-white text-sm font-normal flex gap-1 bg-[#0044ff1c]"
              : "border border-primary rounded-full hover:bg-[#ffffff18] p-3 text-white text-sm font-normal flex gap-2"
          }
          to={link.path}
          key={i}
        >
          {link.Icon}
          <p className="self-center">{link.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
