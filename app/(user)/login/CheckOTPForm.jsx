import Button from "@/common/Button";
import toPersianDigits from "@/utils/toPersianDigits";
import React from "react";
import OTPInput from "react-otp-input";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const CheckOTPForm = ({
  onSubmit,
  otp,
  onChange,
  isPending,
  editNumber,
  timer,
  resendCode,
}) => {
  return (
    <form className="sm:max-w-sm py-2 w-full" onSubmit={onSubmit}>
      <h2 className="font-bold text-2xl text-center mb-10">ورود</h2>
      <div className="mb-4 mx-1 flex justify-between">
        <p>کد تایید را وارد کنید</p>
        <Button
          onClick={() => editNumber()}
          color="info"
          className="p-0 text-sm flex items-center gap-1"
        >
          ویرایش شماره
          <HiOutlineArrowNarrowLeft size={17}/>
        </Button>
      </div>
      <OTPInput
        inputStyle={{
          width: "2.3rem",
          padding: ".5rem ",
          border: "1px solid rgb(var(--color-primary-300))",
          borderRadius: ".5rem",
          outline: "none",
          margin: "0 .3rem",
          flexGrow: "1",
          fontWeight: "bold",
        }}
        containerStyle="flex flex-grow justify-center otp-container"
        value={otp}
        shouldAutoFocus={true}
        onChange={onChange}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <Button className="mt-6 w-full" color="primary" type="submit">
        {isPending ? (
          <div
            className="flex mx-auto h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          "تایید کد"
        )}
      </Button>
      <Button
        color="info"
        className="p-0 w-full pt-4 text-sm"
        disabled={timer > 0 && true}
        onClick={(e) => resendCode(e)}
      >
        {timer > 0
          ? `${toPersianDigits(timer)} ثانیه تا ارسال مجدد کد`
          : "ارسال مجدد کد"}
      </Button>
    </form>
  );
};

export default CheckOTPForm;
