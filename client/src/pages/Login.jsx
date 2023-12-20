import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import EmailForm from "../components/EmailForm";
import FormFooter from "../components/FormFooter";
import axios from "axios";

const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please Enter your Email");
      return;
    }
    if (email && !EmailRegex.test(email)) {
      setError("Invalid Email,Please enter proper email");
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user/userEmail?email=${email}`
      );
      const data = await response.data;
      console.log(data);
      if (data) navigate(`/signin/password?email=${email}`);
      else navigate(`/register/password?email=${email}`);
      setUser(data);
    } catch (e) {}
  };

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full bg-radial">
        <Header />
      </div>
      <div className="self-center md:w-[35%] w-[85%]  py-8 flex flex-col gap-5">
        <h1 className="text-xl font-medium text-gray-900 self-center  break-words">
          Login or Create Account
        </h1>
        <EmailForm
          buttonTitle={"Continue"}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          Error={error}
        />
        <div className=" border-gray-300 flex gap-3">
          <span className="self-center border-t w-full"></span>
          <span className="self-center text-gray-600">or</span>
          <span className="self-center border-t w-full"></span>
        </div>
        <button
          type="button"
          className="md:mx-20 mx-5 p-[4px] flex align-middle justify-center gap-5 bg-primary text-white font-medium  rounded-md"
        >
          <FcGoogle className="text-4xl self-center " />
          <p className="self-center">sign in with google</p>
        </button>
        <FormFooter />
      </div>
    </div>
  );
};

export default Login;
