import React from "react";
import { MdErrorOutline } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";

const EmailForm = ({
  buttonTitle,
  handleSubmit,
  handleChange,
  Error,
  IsLoading,
}) => {
  return (
    <form
      action="post"
      className="w-full bg-white  rounded-sm px-10 py-3 flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-gray-900 text-sm self-start">
          Email
        </label>
        <div className={`w-full relative  rounded-md `}>
          <input
            type="text"
            id="email"
            placeholder="Enter your email address"
            className={`self-start w-full  p-2 pr-10  ${
              Error
                ? "border-2 border-danger focus:outline-danger"
                : "border border-gray-300 focus:outline-primary hover:border-black"
            }  rounded-md`}
            onChange={handleChange}
          />
          {Error && (
            <MdErrorOutline
              className={"absolute top-1 right-2 text-danger text-3xl"}
            />
          )}
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
          <p>{buttonTitle}</p>{" "}
        </div>
      </button>
    </form>
  );
};

export default EmailForm;
