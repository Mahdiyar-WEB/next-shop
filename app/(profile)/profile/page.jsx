"use client";
import {useAuth} from "@/hooks/useAuth";
import React from "react";
import OrdersTable from "../../../components/OrdersTable";

const Profile = () => {
  const { data: information } = useAuth();
  return (
    <main className="mx-8 mt-7 w-full overflow-x-auto gap-4">
      <div className="flex gap-1 whitespace-nowrap mb-5">
        <span>خوش آمدید</span>
        <span>{information?.data?.user?.name}</span>
      </div>
      <OrdersTable title="آخرین سفارش شما" displayCount={1} displayPageLink={true} />
    </main>
  );
};

export default Profile;
