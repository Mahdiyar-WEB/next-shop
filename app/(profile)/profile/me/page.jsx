"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import useAuth from "@/hooks/useAuth";
import { editProfile, getUserProfile } from "@/services/authServices";
import { includeObject } from "@/utils/objectUtils";
import userAuthorization from "@/utils/userAuthorization";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

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
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, data } = useMutation({
    mutationFn: editProfile,
  });

  const handleEditUserInformation = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSubmitUserInformation = async (e) => {
    e.preventDefault();
    !isEdit && setIsEdit(true);
    if (isEdit) {
      try {
        console.log("🚀 ~ handleSubmitUserInformation ~ edit:", edit)
        const { data } = await mutateAsync(edit);
        setIsEdit(false);
        queryClient.invalidateQueries({ queryKey: ["get-profile"] }); // this method will call to invalidate our queryClient and update user information
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    if (isEdit) {
      setEdit(includeObject(user, userInformation.keys));
    }
  }, [isEdit]);

  // const user = useAuth();
  const user = {
    name: "مهدیار مروی",
    email: "mahdiyar472@gmail.com",
    phoneNumber: "09152506383",
    biography: "فرانت اند دولوپر",
  };

  return (
    <main className="mt-7 w-full mx-8">
      <form
        onSubmit={handleSubmitUserInformation}
        className="sm:max-w-xl  w-full mx-auto rounded-lg space-y-4 py-10 px-6 border shadow-lg"
      >
        <h2 className="font-bold text-2xl text-center mb-10">
          {isEdit ? "اطلاعات جدید را وارد کنید" : "اطلاعات کاربری"}
        </h2>
        {Object.entries(includeObject(user, userInformation.keys)).map(
          ([key, value]) => (
            <TextField
              key={key}
              name={key}
              value={isEdit ? edit[key] : value}
              disabled={!isEdit}
              onChange={handleEditUserInformation}
              label={userInformation.persian[key]}
              className={`${
                isEdit
                  ? "border border-primary-600 duration-300 transition-all"
                  : "border"
              }`}
            />
          )
        )}
        {isEdit ? (
          <div className="flex gap-2">
            <Button
              className="flex-grow w-1/2"
              color="success"
              type="submit"
              isPending={isPending}
            >
              ویرایش
            </Button>
            <Button
              onClick={() => setIsEdit(false)}
              className="flex-grow"
              color="danger"
            >
              لغو ویرایش
            </Button>
          </div>
        ) : (
          <Button className="w-full" color="primary" type="submit">
            ویرایش اطلاعات
          </Button>
        )}
      </form>
    </main>
  );
};

export default Me;
