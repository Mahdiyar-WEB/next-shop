"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import React from "react";

const SendOTPForm = ({ value, onChange, onClick, onSubmit }) => {
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
      <Button className="mt-3 w-full" name="دریافت کد" type="submit" />
    </form>
  );
};

export default SendOTPForm;
