"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import React from "react";

const SendOTPForm = ({ value, onChange, onClick }) => {
  return (
    <form className="sm:max-w-sm p-2 w-full">
      <TextField
        name="phoneNumber"
        label="شماره همراه"
        value={value}
        type="tel"
        onChange={onChange}
        placeholder="09*********"
      />
      <Button className="mt-3" name="دریافت کد" onClick={onClick} />
    </form>
  );
};

export default SendOTPForm;
