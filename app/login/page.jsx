"use client";
import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSendOTP = ()=>{
    alert("ho")
  }
  return (
    <div className="w-10/12  h-[calc(100dvh-230px)] sm:w-full mx-auto grid place-items-center">
      <SendOTPForm value={phoneNumber} onChange={handlePhoneNumberChange} onClick={()=> handleSendOTP()}/>
    </div>
  );
};

export default Login;
