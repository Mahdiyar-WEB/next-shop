"use client";
import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import toPersianDigits from "@/utils/toPersianDigits";
import toEnglishDigits from "@/utils/toEnglishDigits";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOTP, checkOTP } from "@/services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";

const RESEND_TIMER = 60;

const Login = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(null);
  const router = useRouter();
  const {
    data: getOTPData,
    error: getOTPError,
    isPending: getOTPIsPending,
    mutateAsync: getOTPMutateAsync,
  } = useMutation({
    mutationFn: getOTP,
  });
  const {
    data: checkOTPData,
    error: checkOTPError,
    isPending: checkOTPIsPending,
    mutateAsync: checkOTPMutateAsync,
  } = useMutation({
    mutationFn: checkOTP,
  });

  const handlePhoneNumberChange = (e) => {
    const digits = toPersianDigits(e.target.value);
    setPhoneNumber(digits);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const convertedPhoneNumber = toEnglishDigits(phoneNumber);
      const { data } = await getOTPMutateAsync({
        phoneNumber: convertedPhoneNumber,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setStep(2);
      setTimer(RESEND_TIMER);
    }
  };

  const handleValidateOTP = async (e) => {
    e.preventDefault();
    try {
      const convertedPhoneNumber = toEnglishDigits(phoneNumber);
      const convertedOtp = toEnglishDigits(otp);
      const { user, message } = await checkOTPMutateAsync({
        phoneNumber: convertedPhoneNumber,
        otp: convertedOtp,
      });
      toast.success(message);
      user?.isActive
        ? router.push("/")
        : router.push("/complete-profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      router.push("/complete-profile");
    }
  };

  const handleOTPChange = (e) => {
    const digits = toPersianDigits(e);
    setOtp(digits);
  };

  const handleEditNumber = () => {
    setStep(1);
    setPhoneNumber("");
  };

  useEffect(() => {
    const timerInterval =
      timer > 0 && setInterval(() => setTimer((t) => t - 1), 1000);

    return () => {
      timerInterval && clearInterval(timerInterval);
    };
  }, [timer]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            value={phoneNumber}
            onSubmit={handleSendOTP}
            onChange={handlePhoneNumberChange}
            isPending={getOTPIsPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onSubmit={handleValidateOTP}
            otp={otp}
            onChange={handleOTPChange}
            isPending={checkOTPIsPending}
            editNumber={handleEditNumber}
            timer={timer}
            resendCode={handleSendOTP}
          />
        );
    }
  };

  return (
    <div className="h-[calc(100dvh-230px)] sm:w-full mx-auto grid place-items-center">
      <div className="w-11/12 sm:max-w-screen-sm md:max-h-96 bg-white grid place-items-center border shadow-md pb-20 pt-4 px-4 rounded-md ">
        {renderSteps()}
      </div>
    </div>
  );
};

export default Login;
