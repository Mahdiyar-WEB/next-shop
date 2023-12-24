"use client";
import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import toPersianDigits from "@/utils/toPersianDigits";
import http from "@/services/httpService";
import { toast } from "react-hot-toast";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    const digits = toPersianDigits(e.target.value);
    setPhoneNumber(digits);
  };
  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const { data } = await http.post("/user/get-otp", { phoneNumber });
      console.log("🚀 ~ file: page.jsx:18 ~ handleSendOTP ~ data:", data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="h-[calc(100dvh-230px)] sm:w-full mx-auto grid place-items-center">
      <div className="w-10/12 sm:max-w-screen-sm md:max-h-96 bg-white grid place-items-center border shadow-md pb-20 pt-4 px-4 rounded-md ">
        <SendOTPForm
          value={phoneNumber}
          onSubmit={handleSendOTP}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  );
};

export default Login;
