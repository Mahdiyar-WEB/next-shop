"use client";
import Badge from "@/common/Badge";
import { userOrdersTableHead } from "@/constants/tableHeads";
import useAuth from "@/hooks/useAuth";
import persianDate from "@/utils/persianDate";
import toPersianDigits from "@/utils/toPersianDigits";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const OrdersTable = ({
  title,
  displayCount = null,
  displayPageLink = false,
  rowsPerPage = 5,
}) => {
  const { data: information } = useAuth();
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
              {userOrdersTableHead.map((head) => {
                return (
                  <th key={head.id} className="whitespace-nowrap table__th">
                    {head.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {information?.data.payments
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(
                pagination > 1 ? (pagination - 1) * rowsPerPage : 0,
                displayCount || pagination * rowsPerPage
              )
              .map(
                (
                  {
                    _id,
                    invoiceNumber,
                    description,
                    cart: { productDetail },
                    amount,
                    createdAt,
                    status,
                  },
                  index
                ) => {
                  return (
                    <tr
                      className="border-b border-b-gray-300 last:border-none"
                      key={_id}
                    >
                      <td className="table__td font-semibold">
                        {index + 1 + (pagination - 1) * 5}
                      </td>
                      <td className="table__td">
                        {toPersianDigits(invoiceNumber)}
                      </td>
                      <td className="table__td max-w-[250px] truncate">
                        {description}
                      </td>
                      <td className="table__td flex flex-col items-start gap-y-[2px]">
                        {productDetail.map(({ slug, title, _id }) => (
                          <Link key={_id} href={`/products/${slug}`}>
                            <Badge
                              className="text-sm bg-gray-600 text-white"
                              title={title}
                            />
                          </Link>
                        ))}
                      </td>
                      <td className="table__td">
                        <span className="font-semibold">
                          {toPersianDigits(amount)}
                        </span>
                        <span className="text-xs text-secondary-600 font-semibold ps-1">
                          تومان
                        </span>
                      </td>
                      <td className="table__td">{persianDate(createdAt)}</td>
                      <td className="table__td">
                        {status === "COMPLETED" ? (
                          <Badge
                            className="!text-base bg-success text-white"
                            title="موفق"
                          />
                        ) : (
                          <Badge
                            className="!text-base bg-error text-white"
                            title="ناموفق"
                          />
                        )}
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
                pagination * rowsPerPage >= information?.data.payments.length
              }
              className={`${
                pagination * rowsPerPage >= information?.data.payments.length
                  ? "text-secondary-400"
                  : "text-primary-900"
              } border border-secondary-300 rounded-full p-1`}
            >
              <HiOutlineArrowNarrowLeft size={20} />
            </button>
          </div>
        )}
        {displayPageLink && (
          <Link
            className="!text-blue-500 font-semibold inline-block text-center w-full border-t-2 mt-5 py-2"
            href="profile/orders"
          >
            مشاهده کل سفارشات
          </Link>
        )}
      </div>
    </>
  );
};

export default OrdersTable;
