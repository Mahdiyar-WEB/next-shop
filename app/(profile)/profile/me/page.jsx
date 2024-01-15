"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import { includeObject } from "@/utils/objectUtils";
import userAuthorization from "@/utils/userAuthorization";
import React, { useState } from "react";

const userInformation = {
  persian: {
    name: "نام کاربری",
    phoneNumber: "شماره همراه",
    email: "ایمیل",
    biography: "بیوگرافی",
  },
  keys: ["name", "email", "phoneNumber", "biography"],
};

const Me = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState({});

  //   const user = userAuthorization();
  const user = {
    name: "مهدیار مروی",
    email: "mahdiyar472@gmail.com",
    phoneNumber: "09152506383",
    biography: "فرانت اند دولوپر",
  };

  return (
    <main className="mt-7 w-full mx-8">
      <div className="sm:max-w-xl  w-full mx-auto rounded-lg space-y-4 py-10 px-6 border shadow-lg">
        <h2 className="font-bold text-2xl text-center mb-10">اطلاعات کاربری</h2>
        {Object.entries(includeObject(user, userInformation.keys)).map(
          ([key, value]) => (
            <TextField
              key={key}
              name={key}
              value={value}
              disabled={!isEdit}
              label={userInformation.persian[key]}
            />
          )
        )}
        <Button
          className="w-full"
          color={isEdit ? "success" : "primary"}
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "ویرایش" : "ویرایش اطلاعات"}
        </Button>
      </div>
    </main>
  );
};

export default Me;
