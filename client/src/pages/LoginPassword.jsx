import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import PasswordForm from "../components/PasswordForm";
import FormFooter from "../components/FormFooter";
import axios from "axios";

const LoginPassword = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) setError("Please entery your Password");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      console.log("requested");
      console.log(await response.data);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full bg-radial">
        <Header />
      </div>
      <div className="self-center w-[35%] py-8 flex flex-col gap-5">
        <h1 className="text-xl font-semibold text-gray-900 self-center">
          Enter your password
        </h1>
        <p className="text-sm font-normal text-gray-900 self-center">
          Enter your EthioBooking.com password for{" "}
          <span className="font-bold">{email}</span>
        </p>
        <PasswordForm
          buttonTitle={"Sign in "}
          submitHandler={handleSubmit}
          ChangeHandler={handleChange}
          Error={Error}
        />
        <Link
          to={"/recover-account"}
          className="self-center text-blue-600 underline text-sm "
        >
          {" "}
          Forget password ?
        </Link>
        <FormFooter />
      </div>
    </div>
  );
};

export default LoginPassword;
