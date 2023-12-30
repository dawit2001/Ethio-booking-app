import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import PasswordForm from "../components/PasswordForm";
import FormFooter from "../components/FormFooter";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const Login = async (email, password) => {
  console.log(email, password);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/signin`,
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
    return await response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const LoginPassword = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [password, setPassword] = useState(null);
  const [Error, setError] = useState();
  const handleChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const mutation = useMutation({
    mutationKey: ["loginPassword"],
    mutationFn: ({ email, password }) => Login(email, password),
    onSuccess: (data) => console.log(data),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter your Password");
      return;
    }
    console.log(email, password);
    mutation.mutate({ email, password });
  };
  if (mutation.isSuccess) navigate("/");
  if (mutation.isError) console.log(mutation.error);
  useEffect(() => {
    if (mutation.isError) setError(mutation.error.message);
  }, [mutation.error]);
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
          IsLoading={mutation.isPending}
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
