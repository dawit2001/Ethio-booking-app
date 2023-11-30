import React from "react";
import Header from "../components/Header";
import FormFooter from "../components/FormFooter";
import { Link, useSearchParams } from "react-router-dom";

const ConfirmRecoverAccount = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  return (
    <div className="w-full flex flex-col align-middle justify-center">
      <Header />
      <div className="self-center w-[35%] py-8 flex flex-col gap-5">
        <h1 className="text-xl font-medium text-gray-900 self-center">
          Check your Email
        </h1>
        <p className="text-sm text-gray-800 self-center">
          {" "}
          We just emailed instructions and a reset password link to{" "}
          <span className="text-gray-900 font-bold">{email}</span>. It might
          take a few minutes to arrive.
        </p>
        <Link
          to={"/signin"}
          className="border  rounded-md p-2 text-primary text-center border-primary"
        >
          Back to signin
        </Link>

        <FormFooter />
      </div>
    </div>
  );
};

export default ConfirmRecoverAccount;
