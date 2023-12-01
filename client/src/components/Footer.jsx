import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { GoQuestion } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "/assets/Eblogo2.svg";
import logo2 from "/assets/Eblogo3.svg";
import { footerLists } from "../utils/footerlist";

const Footer = () => {
  footerLists.map((list, i) => console.log(list[Object.keys(list)]));
  return (
    <footer className="w-full  justify-self-end">
      <div className="w-full bg-radial p-20 flex flex-col justify-center align-middle">
        <h2 className="self-center text-white font-medium text-3xl">
          Save time,Save money
        </h2>
        <p className="text-white text-xl self-center">
          Subscribe and we'll send the best deals to you
        </p>
        <form
          action=""
          className="flex justify-between self-center rounded-md border w-[50%] mt-5"
        >
          <input
            type="text"
            className="p-4 bg-white outline-none flex-1 "
            placeholder="Enter your email address"
          />
          <button className="bg-primary p-4 text-white  rounded-md">
            Subscribe
          </button>
        </form>
      </div>
      <div className="w-full grid md:grid-cols-4 gap-2 p-20">
        {footerLists.map((list) => (
          <div className="flex flex-col self-center gap-3">
            {list[Object.keys(list)].map((list) => (
              <Link to={"/"} className=" text-sm text-blue-600">
                {list.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
