"use client";
import Badge from "@/common/Badge";
import { usersTableHead } from "@/constants/tableHeads";
import { useGetUsers } from "@/hooks/useAuth";
import persianDate from "@/utils/persianDate";
import toPersianDigits from "@/utils/toPersianDigits";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const UsersTable = ({ title, displayCount = null, rowsPerPage = 5 }) => {
  const { data: information } = useGetUsers();
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
              {usersTableHead.map((head) => {
                return (
                  <th key={head.id} className="whitespace-nowrap table__th">
                    {head.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {information?.data.users
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(
                pagination > 1 ? (pagination - 1) * rowsPerPage : 0,
                displayCount || pagination * rowsPerPage
              )
              .map(
                (
                  {
                    _id,
                    name,
                    email,
                    Products,
                    phoneNumber,
                    createdAt,
                    isVerifiedPhoneNumber,
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
                      <td className="table__td">{name}</td>
                      <td className="table__td">{email}</td>
                      <td className="table__td">
                        {toPersianDigits(phoneNumber)}
                      </td>
                      <td className="table__td">
                        {isVerifiedPhoneNumber ? (
                          <Badge
                            className="text-sm mx-auto"
                            color="success"
                            title="فعال"
                          />
                        ) : (
                          <Badge
                            className="text-sm mx-auto"
                            color="danger"
                            title="غیرفعال"
                          />
                        )}
                      </td>
                      <td className="table__td flex flex-col items-start gap-y-[2px]">
                        {Products.map(({ title, _id }) => (
                          <Link key={_id} href={`/products`}>
                            <Badge
                              className="text-sm bg-gray-600 text-white"
                              title={title}
                            />
                          </Link>
                        ))}
                      </td>
                      <td className="table__td">{persianDate(createdAt)}</td>
                      <td className="table__td">
                        <Link href={`/admin/users/${_id}`}>مشاهده</Link>
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

export default UsersTable;
