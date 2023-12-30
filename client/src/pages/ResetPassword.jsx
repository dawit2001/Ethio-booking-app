import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import PasswordForm from "../components/PasswordForm";
import FormFooter from "../components/FormFooter";
import axios from "axios";
import NewPasswordForm from "../components/NewPasswordForm";
import { useMutation } from "@tanstack/react-query";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const resetPassword = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/resetPassword`,
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
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

const ResetPassword = () => {
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

  const mutation = useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: ({ email, password }) => resetPassword({ email, password }),
    onSuccess: (data) => console.log(data),
  });
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
    mutation.mutate({ email, password });
  };
  if (mutation.isSuccess) navigate("/");
  useEffect(() => {
    if (mutation.isError) setError(["", mutation.error.message]);
  }, [mutation.error]);
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full bg-radial">
        <Header />
      </div>
      <div className="self-center w-[35%]  py-8 flex flex-col gap-5">
        <h1 className="text-xl font-semibold text-gray-900 self-center">
          Create new Password
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
          IsLoading={mutation.isPending}
          Error={Error}
        />

        <FormFooter />
      </div>
    </div>
  );
};

export default ResetPassword;
