import Button from "@/common/Button";
import CategoriesTable from "@/components/CategoriesTable";
import Link from "next/link";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
const Categories = () => {
  return (
    <main className="mt-7 w-full mx-8">
      <div className="flex justify-end">
        <Button
          color="primary"
          className="rounded-md flex gap-2 text-sm items-center"
        >
          <IoMdAddCircle className="mb-[1px]" size={20}/>
          <Link href="/admin/categories/add">اضافه کردن دسته بندی</Link>
        </Button>
      </div>
      <CategoriesTable title="لیست دسته بندی ها" rowsPerPage={10} />
    </main>
  );
};

export default Categories;
