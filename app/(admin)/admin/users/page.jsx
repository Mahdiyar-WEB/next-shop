"use client";
import { useGetUsers } from "@/hooks/useAuth";
import React from "react";

const Users = () => {
  const { data: information } = useGetUsers();
  console.log("🚀 ~ Users ~ data:", information?.data.users);
  return <div>Users</div>;
};

export default Users;
