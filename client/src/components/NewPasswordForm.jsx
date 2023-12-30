import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { SlEye } from "react-icons/sl";
import { RiEyeCloseLine } from "react-icons/ri";
import CircularProgress from "@mui/material/CircularProgress";

const NewPasswordForm = ({
  buttonTitle,
  submitHandler,
  PasswordChangeHandler,
  PasswordConfirmChangeHandler,
  Error,
  IsLoading,
}) => {
  const [showPassword, setShowPassword] = useState([false.false]);
  console.log(Error);
  return (
    <form
      action=""
      className="w-full bg-white  rounded-sm px-10 py-3 flex flex-col gap-8"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col gap-1">
        <div>
          <label
            htmlFor="newpassword"
            className="text-gray-900 text-sm self-start"
          >
            New password
          </label>
          <div className={`w-full relative  rounded-md `}>
            <input
              type={`${showPassword[0] ? "text" : "password"}`}
              id="newpassword"
              placeholder="Create new password"
              className={`self-start w-full  p-2 pr-20 ${
                Error[0]
                  ? "border-2 border-danger focus:outline-danger"
                  : "border border-gray-300 focus:outline-primary hover:border-black"
              }  rounded-md`}
              onChange={PasswordChangeHandler}
            />
            {Error[0] && (
              <MdErrorOutline
                className={"absolute top-1 right-12 text-danger text-3xl"}
              />
            )}
            <button
              type="button"
              className="absolute top-2 right-4 text-2xl text-gray-800"
              onClick={() => {
                setShowPassword((prevState) => [!prevState[0], prevState[1]]);
              }}
            >
              {showPassword[0] ? <RiEyeCloseLine /> : <SlEye />}
            </button>
          </div>
          <p className="text-sm text-danger">{Error[0]}</p>
        </div>{" "}
        <div>
          <label
            htmlFor="confirmPassword"
            className="text-gray-900 text-sm self-start"
          >
            Confirm password
          </label>
          <div className={`w-full relative  rounded-md `}>
            <input
              type={`${showPassword[1] ? "text" : "password"}`}
              id="confirmPassword"
              placeholder="Re-enter the password"
              className={`self-start w-full  p-2 pr-20 ${
                Error[1]
                  ? "border-2 border-danger focus:outline-danger"
                  : "border border-gray-300 focus:outline-primary hover:border-black"
              }  rounded-md`}
              onChange={PasswordConfirmChangeHandler}
            />
            {Error[1] && (
              <MdErrorOutline
                className={"absolute top-1 right-12 text-danger text-3xl"}
              />
            )}
            <button
              type="button"
              className="absolute top-2 right-4 text-2xl text-gray-800"
              onClick={() =>
                setShowPassword((prevState) => [prevState[0], !prevState[1]])
              }
            >
              {showPassword[1] ? <RiEyeCloseLine /> : <SlEye />}
            </button>
          </div>
          <p className="text-sm text-danger">{Error[1]}</p>
        </div>
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

export default NewPasswordForm;
