import React from "react";
import Header from "../components/Header";
import FormFooter from "../components/FormFooter";
import { Link, useSearchParams } from "react-router-dom";

const ConfirmEmail = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  return (
    <div className="w-full flex flex-col align-middle justify-center">
      <div className="w-full bg-radial">
        <Header />
      </div>
      <div className="self-center w-[35%] py-8 flex flex-col gap-5">
        <h1 className="text-xl font-medium text-gray-900 self-center">
          Email confirmed
        </h1>
        <p className="text-sm text-gray-800 self-center">
          {" "}
          Thank you for confiming your email
        </p>
        <Link
          to={"/signin"}
          className="border bg-primary rounded-md p-2 text-white text-center border-primary"
        >
          Sign in
        </Link>

        <FormFooter />
      </div>
    </div>
  );
};

export default ConfirmEmail;
