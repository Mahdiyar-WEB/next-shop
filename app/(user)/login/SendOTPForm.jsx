"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import React from "react";

const SendOTPForm = ({ value, onChange, onSubmit, isPending }) => {
  return (
    <form className="sm:max-w-sm p-2 w-full" onSubmit={onSubmit}>
      <h2 className="font-bold text-2xl text-center mb-10">ورود</h2>
      <TextField
        name="phoneNumber"
        label="شماره همراه"
        value={value}
        type="tel"
        onChange={onChange}
        maxLength={11}
        placeholder="۰۹*********"
      />
      <Button className="mt-4 w-full" color="primary" type="submit">
        {isPending ? (
          <div
            className="flex mx-auto h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          "دریافت کد تایید"
        )}
      </Button>
    </form>
  );
};

export default SendOTPForm;
