import React, { useState } from "react";
import Header from "../components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import FormFooter from "../components/FormFooter";
import EmailForm from "../components/EmailForm";
import axios from "axios";

const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const RecoverAccount = () => {
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
      const response = await axios.post(
        `http://localhost:4000/api/auth/resetPasswordEmail`,
        {
          email,
        }
      );

      navigate(`/recover-account/confirmation?email=${email}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full bg-radial">
        <Header />
      </div>
      <div className="self-center w-[35%] py-8 flex flex-col gap-5">
        <h1 className="text-xl font-medium text-gray-900 self-center">
          Recover Account
        </h1>
        <p className="text-sm text-gray-800 self-center">
          {" "}
          We'll send you a link to reset your password. Enter the email address
          you use to sign in to Booking.com.
        </p>

        <EmailForm
          buttonTitle={"send link"}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <FormFooter />
      </div>
    </div>
  );
};

export default RecoverAccount;
