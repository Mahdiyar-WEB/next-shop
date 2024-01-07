import Button from "@/common/Button";
import TextField from "@/common/TextField";
import React from "react";

const CustomerForm = ({
  onSubmit,
  name,
  email,
  onChange,
  isPending,
}) => {
  return (
    <form className="sm:max-w-sm p-2 w-full" onSubmit={onSubmit}>
      <h2 className="font-bold text-2xl text-center mb-10">
        ویرایش یا تکمیل اطلاعات
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
      <Button className="mt-4 w-full" color="primary" type="submit">
        {isPending ? (
          <div
            class="flex mx-auto h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          "تایید"
        )}
      </Button>
    </form>
  );
};

export default CustomerForm;
