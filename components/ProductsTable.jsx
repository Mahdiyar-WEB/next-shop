"use client";
import { productsTableHead } from "@/constants/tableHeads";
import { useGetProducts } from "@/hooks/useGetProducts";
import toPersianDigits from "@/utils/toPersianDigits";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const ProductsTable = ({ title, displayCount = null, rowsPerPage = 5 }) => {
  const { data: information } = useGetProducts();
  console.log("🚀 ~ ProductsTable ~ information:", information)
  const [pagination, setPagination] = useState(1);
  const incrementPagination = () => {
    setPagination(pagination + 1);
  };
  const decrementPagination = () => {
    pagination > 1 && setPagination(pagination - 1);
  };

  return (
    <>
      <h3 className="text-xl font-semibold mb-3 ms-3">{title}</h3>
      <div className="overflow-x-auto border-2 rounded-lg max-w-[2000px] mx-auto">
        <table className="w-full">
          <thead>
            <tr>
              {productsTableHead.map((head) => {
                return (
                  <th key={head.id} className="whitespace-nowrap table__th">
                    {head.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {information?.data.products
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(
                pagination > 1 ? (pagination - 1) * rowsPerPage : 0,
                displayCount || pagination * rowsPerPage
              )
              .map(
                (
                  {
                    _id,
                    title,
                    category,
                    price,
                    offPrice,
                    discount,
                    countInStock,
                  },
                  index
                ) => {
                  return (
                    <tr
                      className="border-b border-b-gray-300 last:border-none"
                      key={_id}
                    >
                      <td className="table__td font-semibold">
                        {toPersianDigits(index + 1 + (pagination - 1) * 5)}
                      </td>
                      <td className="table__td">{title}</td>
                      <td className="table__td">{category.title}</td>
                      <td className="table__td">{toPersianDigits(price)}</td>
                      <td className="table__td">
                        {toPersianDigits(discount)}%
                      </td>
                      <td className="table__td flex flex-col items-start gap-y-[2px]">
                        {toPersianDigits(offPrice)}
                      </td>
                      <td className="table__td">{countInStock}</td>
                      <td className="table__td">
                        <Link href={`/admin/products/${_id}`}>مشاهده</Link>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
        {!displayCount && (
          <div className="flex gap-3 w-fit items-center overflow-hidden p-3">
            <button
              onClick={decrementPagination}
              className={`${
                pagination === 1 ? "text-secondary-400" : "text-primary-900"
              } border border-secondary-300 rounded-full p-1`}
            >
              <HiOutlineArrowNarrowRight size={20} />
            </button>
            <p className="font-semibold border-b border-secondary-300">
              <span className="pe-1">لیست</span>
              <span>{toPersianDigits(pagination)}</span>
            </p>
            <button
              onClick={incrementPagination}
              disabled={
                pagination * rowsPerPage >= information?.data.users.length
              }
              className={`${
                pagination * rowsPerPage >= information?.data.users.length
                  ? "text-secondary-400"
                  : "text-primary-900"
              } border border-secondary-300 rounded-full p-1`}
            >
              <HiOutlineArrowNarrowLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsTable;
