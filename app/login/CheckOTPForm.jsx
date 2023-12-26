import Button from "@/common/Button";
import React from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = ({ onSubmit, otp, onChange, isPending }) => {
  return (
    <form className="sm:max-w-sm py-2 w-full" onSubmit={onSubmit}>
      <h2 className="font-bold text-2xl text-center mb-10">ورود</h2>
      <p className="mb-4 ms-1">کد تایید را وارد کنید</p>
      <OTPInput
        inputStyle={{
          width: "2.3rem",
          padding: ".5rem ",
          border: "1px solid rgb(var(--color-primary-300))",
          borderRadius: ".5rem",
          outline: "none",
          margin: "0 .3rem",
          flexGrow: "1",
          fontWeight:"bold"
        }}
        containerStyle="flex flex-grow justify-center otp-container"
        value={otp}
        shouldAutoFocus={true}
        onChange={onChange}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <Button
        className="mt-6 w-full"
        name={
          isPending ? (
            <div
              class="flex mx-auto h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
            </div>
          ) : (
            "تایید کد"
          )
        }
        type="submit"
      />
    </form>
  );
};

export default CheckOTPForm;
