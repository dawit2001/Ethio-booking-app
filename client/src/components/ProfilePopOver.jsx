import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { BsSuitcaseLg } from "react-icons/bs";
import axios from "axios";
export default function ProfilePopOver({ user }) {
  const handleSignout = async () => {
    console.log("clicked");
    try {
      const response = await axios.get(
        "http://localhost:4000/api/auth/signout",
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-full bg-orange-700  text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
          >
            <Avatar
              variant="circle"
              alt="image"
              className="w-[30px] h-[30px] bg-slate-400 rounded-md shadow-md"
            >
              {user.name ? user.name.slice(0, 1) : user.email.slice(0, 1)}
            </Avatar>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-40 mt-2">
              <div className="overflow-hidden w-[300px] rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="relative g bg-white p-3  flex-col flex gap-4">
                  <Link
                    to={"#"}
                    className="flex gap-2 text-gray-600 font-medium text-sm p-3 hover:bg-slate-100"
                  >
                    <MdPersonOutline className="self-center text-2xl text-gray-500  " />
                    <span className="self-center">Account</span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex gap-2 text-gray-600 font-medium text-sm p-3 hover:bg-slate-100"
                  >
                    <BsSuitcaseLg className="self-center text-2xl text-gray-500  " />
                    <span className="self-center">Bookings</span>
                  </Link>
                  <Link
                    to={"#"}
                    className="flex gap-2 text-gray-600 font-medium text-sm p-3 hover:bg-slate-100"
                  >
                    <BsHeart className="self-center text-2xl text-gray-500  " />
                    <span className="self-center">Faviourites</span>
                  </Link>
                  <button
                    className="flex gap-2 text-gray-600 font-medium text-sm p-3 hover:bg-slate-100"
                    onClick={handleSignout}
                  >
                    <CiLogout className="self-center text-2xl text-gray-500  " />
                    <span className="self-center">Sign out</span>
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
