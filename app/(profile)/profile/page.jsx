"use client";
import useAuth from "@/hooks/useAuth";
import { data } from "autoprefixer";
import React from "react";

const Profile = () => {
  const { data: information } = useAuth();
  return (
    <main className="mx-8 mt-7 grid grid-cols-12 gap-4">
      <div className="flex gap-1 whitespace-nowrap">
        <span>خوش آمدید</span>
        <span>{information?.data?.user?.name}</span>
      </div>
    </main>
  );
};

export default Profile;
