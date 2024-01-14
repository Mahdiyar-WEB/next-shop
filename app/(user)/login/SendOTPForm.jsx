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
      <Button isPending={isPending} className="mt-4 w-full" color="primary" type="submit">
        دریافت کد تایید
      </Button>
    </form>
  );
};

export default SendOTPForm;
