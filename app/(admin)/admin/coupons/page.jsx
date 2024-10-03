import Button from "@/common/Button";
import CouponsTable from "@/components/CouponsTable";
import Link from "next/link";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
const Categories = () => {
  return (
    <main className="mt-7 w-full mx-8">
      <div className="flex justify-end">
      <Button
          color="primary"
          className="rounded-md flex gap-2 p-0 text-sm items-center"
        >
          <Link className="flex gap-2 px-3 py-3" href="/admin/coupons/add">
            <IoMdAddCircle className="mb-[1px]" size={20} />
            اضافه کردن کد تخفیف
          </Link>
        </Button>
      </div>
      <CouponsTable title="لیست کدهای تخفیف" rowsPerPage={10} />
    </main>
  );
};

export default Categories;
