import Button from "@/common/Button";
import TextField from "@/common/TextField";
import React from "react";

const CustomerForm = ({ onSubmit, name, email, onChange, isPending }) => {
  return (
    <form className="sm:max-w-sm p-2 w-full" onSubmit={onSubmit}>
      <h2 className="font-bold text-2xl text-center mb-10">
        تکمیل اطلاعات
      </h2>
      <TextField
        name="name"
        label="نام و نام خانوادگی"
        value={name}
        type="text"
        className="mb-4"
        onChange={onChange}
      />
      <TextField
        name="email"
        label="ایمیل"
        value={email}
        type="email"
        onChange={onChange}
        placeholder="example@gmail.com"
      />
      <Button
        isPending={isPending}
        className="mt-4 w-full"
        color="primary"
        type="submit"
      >
        تایید
      </Button>
    </form>
  );
};

export default CustomerForm;
