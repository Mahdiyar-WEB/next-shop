"use client";
import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import { completeProfile } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CompleteProfile = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const { data, error, isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const clonedUser = { ...user };
    clonedUser[e.target.name] = e.target.value;
    setUser(clonedUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(user);
      toast.success(message);
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="h-[calc(100dvh-230px)] sm:w-full mx-auto grid place-items-center">
      <div className="w-11/12 sm:max-w-screen-sm md:max-h-96 bg-white grid place-items-center border shadow-md pb-20 pt-4 px-4 rounded-md ">
        <CustomerForm
          onChange={handleChange}
          isPending={isPending}
          onSubmit={handleSubmit}
          {...user}
        />
      </div>
    </div>
  );
};

export default CompleteProfile;
