import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import PasswordForm from "../components/PasswordForm";
import FormFooter from "../components/FormFooter";
import axios from "axios";
import NewPasswordForm from "../components/NewPasswordForm";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const RegisterPassword = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Error, setError] = useState(["", ""]);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError(["Please entery your Password", ""]);
      return;
    }
    if (!confirmPassword) {
      console.log(confirmPassword);
      setError(["", "Please entery your Password"]);
      return;
    }
    if (password && !passwordRegex.test(password)) {
      setError(["Invalid password pattern ", ""]);
      return;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      setError(["", "Password doesn't match "]);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          email,
          password,
        }
      );
      navigate("/");
    } catch (e) {
      console.log(e.response.data.message);
      setError(e.response.data.message);
    }
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full bg-radial">
        <Header />
      </div>
      <div className="self-center w-[35%]  py-8 flex flex-col gap-5">
        <h1 className="text-xl font-semibold text-gray-900 self-center">
          Create Password
        </h1>
        <p className="text-sm font-normal text-gray-900 text-center">
          Use a minimum of 8 characters, including uppercase letters, lowercase
          letters, and numbers.
        </p>
        <NewPasswordForm
          buttonTitle={"Create Account "}
          submitHandler={handleSubmit}
          PasswordChangeHandler={handlePasswordChange}
          PasswordConfirmChangeHandler={handleConfirmPasswordChange}
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

export default RegisterPassword;
