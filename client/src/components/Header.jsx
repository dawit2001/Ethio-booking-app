import React, { useEffect, useState } from "react";
import logo from "/assets/Eblogo2.svg";
import logo2 from "/assets/Eblogo3.svg";
import { Link, NavLink, useFetcher } from "react-router-dom";
import { GoQuestion } from "react-icons/go";
import { CgMenuRight } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar } from "@mui/material";

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const checkRoutes = () => {
    if (
      location.pathname.includes("/recover-account") ||
      location.pathname.includes("/confirm-email") ||
      location.pathname.includes("/reset-password") ||
      location.pathname.includes("/recover-account") ||
      location.pathname.includes("/register/password")
    )
      return true;
    else return false;
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/profile",
          {
            headers: {
              "Content-Type": "application/json",
            },

            withCredentials: true,
          }
        );
        const data = await response.data;
        console.log(data);
        if (data) setUser(data);
      } catch (e) {
        console.log(e);
        if (e.response.status === 401 || e.response.status === 403) {
          try {
            const response = await axios.get(
              "http://localhost:4000/api/auth/refresh",
              {
                headers: {
                  "Content-Type": "application/json",
                },

                withCredentials: true,
              }
            );
            const data = await response.data;
            console.log(data);
            if (data) setUser(data);
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
    fetchProfile();
  }, []);
  return (
    <div className="w-full md:px-20 px-5 py-3 bg-primary flex justify-between ">
      <div className="self-center md:w-[240px] w-[50px] md:h-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="hidden md:block w-full h-full "
          />
          <img src={logo2} alt="logo" className="md:hidden  w-full h-full " />
        </Link>
      </div>
      <div className="px-5 flex ">
        <div className="hidden md:flex gap-4">
          {user ? (
            <>
              {!checkRoutes() && (
                <div className="">
                  <button className="bg-slate-50   rounded-full border-2 border-white">
                    <Avatar
                      variant="circle"
                      alt="image"
                      className="w-[30px] h-[30px] bg-slate-400 rounded-md shadow-md"
                    >
                      {user.name
                        ? user.name.slice(0, 1)
                        : user.email.slice(0, 1)}
                    </Avatar>
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <NavLink
                to={"/signin"}
                className={({ isActive, isPending }) =>
                  isActive || checkRoutes()
                    ? "hidden"
                    : "self-center p-2 text-md md:font-light  rounded-md  text-white hover:bg-[#ffffff13]"
                }
              >
                register
              </NavLink>{" "}
              <NavLink
                to={"/signin"}
                className={({ isActive, isPending }) =>
                  isActive || checkRoutes()
                    ? "hidden"
                    : "self-center p-2 text-md md:font-light  rounded-md  text-white hover:bg-[#ffffff13]"
                }
              >
                sign in
              </NavLink>
            </>
          )}
        </div>
        <NavLink className="md:hidden self-center">
          <CgMenuRight className="text-2xl text-white font-bold" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
