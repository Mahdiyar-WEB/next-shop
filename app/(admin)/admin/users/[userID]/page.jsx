"use client";
import { getUserByID } from "@/services/adminServices";
import React, { useEffect } from "react";

const User = ({ params: { userID } }) => {
  const fetchUser = async () => {
    try {
      const response = await getUserByID(userID);
      console.log("🚀 ~ fetchUser ~ response:", response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return <div>page</div>;
};

export default User;
