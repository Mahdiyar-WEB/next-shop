"use client";
import UsersTable from "@/components/UsersTable";
import { useGetUsers } from "@/hooks/useAuth";
import React from "react";

const Users = () => {
  return (
    <main className="mt-7 w-full mx-8">
      <UsersTable title={"لیست کاربران"} rowsPerPage={5} />
    </main>
  );
};

export default Users;
