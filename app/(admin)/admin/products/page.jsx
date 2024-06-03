import Button from "@/common/Button";
import ProductsTable from "@/components/ProductsTable";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const Products = () => {
  const cookiesStore = cookies();
  const strCookies = toStringCookies(cookiesStore);
  return (
    <main className="mt-7 w-full mx-8">
      <div className="flex justify-end">
        <Button
          color="primary"
          className="rounded-md flex gap-2 p-0 text-sm items-center"
        >
          <Link className="flex gap-2 px-3 py-3" href="/admin/products/add">
            <IoMdAddCircle className="mb-[1px]" size={20} />
            اضافه کردن محصول
          </Link>
        </Button>
      </div>
      <ProductsTable
        title="لیست محصولات"
        cookies={strCookies}
        rowsPerPage={5}
      />
    </main>
  );
};

export default Products;
