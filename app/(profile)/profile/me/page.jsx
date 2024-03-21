"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import {useAuth} from "@/hooks/useAuth";
import { editProfile } from "@/services/authServices";
import { areValuesSame, includeObject } from "@/utils/objectUtils";
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
  const { mutateAsync, isPending } = useMutation({
    mutationFn: editProfile,
  });

  const handleEditUserInformation = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSubmitUserInformation = async (e) => {
    e.preventDefault();
    !isEdit && setIsEdit(true);
    if (
      isEdit &&
      !areValuesSame(
        edit,
        includeObject(information.data.user, userInformation.keys)
      )
    ) {
      try {
        const { data } = await mutateAsync(edit);
        toast.success(data.message);
        setIsEdit(false);
        queryClient.invalidateQueries({ queryKey: ["get-profile"] }); // this method will call to invalidate our queryClient and update user information
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    } else {
      isEdit && toast.error("اطلاعات تکراری است");
    }
  };

  useEffect(() => {
    if (isEdit) {
      setEdit(includeObject(information.data.user, userInformation.keys));
    }
  }, [isEdit]);

  const { data: information, isLoading } = useAuth();

  return (
    <main className="mt-7 w-full mx-8">
      <form
        onSubmit={handleSubmitUserInformation}
        className="sm:max-w-xl w-full mx-auto rounded-lg space-y-4 py-10 px-6 border shadow-lg"
      >
        <h2 className="font-bold text-2xl text-center mb-10">
          {isEdit ? "اطلاعات جدید را وارد کنید" : "اطلاعات کاربری"}
        </h2>
        <div className="flex gap-4 flex-col-reverse">
          {information &&
            Object.entries(
              includeObject(information.data.user, userInformation.keys)
            ).map(([key, value]) => (
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
            ))}
          <div
            className={`grid place-items-center h-[${
              userInformation.keys.length * 95
            }px] ${!isLoading && "hidden"}`}
          >
            <div
              className={`flex mx-auto h-12 w-12 animate-spin rounded-full border-primary-900 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${
                !isLoading && "hidden"
              }`}
              role="status"
            >
              <span className="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
            </div>
          </div>
        </div>
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
