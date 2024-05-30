"use client";
import Badge from "@/common/Badge";
import { categoriesTableHead } from "@/constants/tableHeads";
import { useGetCategories } from "@/hooks/useGetCategories";
import toPersianDigits from "@/utils/toPersianDigits";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const CategoriesTable = ({ title, displayCount = null, rowsPerPage = 5 }) => {
  const { data: information } = useGetCategories();

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
              {categoriesTableHead.map((head) => {
                return (
                  <th key={head.id} className="whitespace-nowrap table__th">
                    {head.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {information?.data.categories
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(
                pagination > 1 ? (pagination - 1) * rowsPerPage : 0,
                displayCount || pagination * rowsPerPage
              )
              .map(({ _id, title, englishTitle, description, type }, index) => {
                return (
                  <tr
                    className="border-b border-b-gray-300 last:border-none"
                    key={_id}
                  >
                    <td className="table__td font-semibold">
                      {toPersianDigits(index + 1 + (pagination - 1) * 5)}
                    </td>
                    <td className="table__td">{title}</td>
                    <td className="table__td">{englishTitle}</td>
                    <td className="table__td">{description}</td>
                    <td className="table__td">
                      <Badge
                        className="text-sm bg-gray-600 text-white"
                        title={type}
                      />
                    </td>
                    <td className="table__td">
                      <Link href={`/admin/products/${_id}`}>مشاهده</Link>
                    </td>
                  </tr>
                );
              })}
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
                pagination * rowsPerPage >= information?.data.categories.length
              }
              className={`${
                pagination * rowsPerPage >= information?.data.categories.length
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

export default CategoriesTable;
