import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { SlEye } from "react-icons/sl";
import { RiEyeCloseLine } from "react-icons/ri";
import CircularProgress from "@mui/material/CircularProgress";

const PasswordForm = ({
  buttonTitle,
  submitHandler,
  ChangeHandler,
  Error,
  IsLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(Error);
  console.log(IsLoading);
  return (
    <form
      action=""
      className="w-full bg-white  rounded-sm px-10 py-3 flex flex-col gap-8"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-gray-900 text-sm self-start">
          password
        </label>
        <div className={`w-full relative  rounded-md `}>
          <input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            placeholder="Enter your email address"
            className={`self-start w-full  p-2 pr-20 ${
              Error
                ? "border-2 border-danger focus:outline-danger"
                : "border border-gray-300 focus:outline-primary hover:border-black"
            }  rounded-md`}
            onChange={ChangeHandler}
          />
          {Error && (
            <MdErrorOutline
              className={"absolute top-1 right-12 text-danger text-3xl"}
            />
          )}
          <button
            type="button"
            className="absolute top-2 right-4 text-2xl text-gray-800"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? <RiEyeCloseLine /> : <SlEye />}
          </button>
        </div>
        <p className="text-sm text-danger">{Error}</p>
      </div>
      <button
        disabled={IsLoading}
        className={`w-full bg-primary p-3 text-white text-md font-medium rounded-md ${
          IsLoading
            ? "opacity-70 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      >
        <div className="flex gap-2 md:items-center md:align-middle justify-center">
          {IsLoading && <CircularProgress size={20} className="text-white" />}
          <p>{buttonTitle}</p>
        </div>
      </button>
      <div className=" border-gray-300 flex gap-3">
        <span className="self-center border-t w-full"></span>
        <span className="self-center border-t w-full"></span>
      </div>
    </form>
  );
};

export default PasswordForm;
