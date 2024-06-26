"use client";
import { productsTableHead } from "@/constants/tableHeads";
import { useGetProducts, useRemoveProduct } from "@/hooks/useGetProducts";
import toPersianDigits from "@/utils/toPersianDigits";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { LuTrash2 } from "react-icons/lu";
import Badge from "@/common/Badge";
import Button from "@/common/Button";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ProductsTable = ({
  title,
  displayCount = null,
  rowsPerPage = 5,
  cookies,
}) => {
  const { data: information } = useGetProducts(cookies);
  const [pagination, setPagination] = useState(1);
  const { mutateAsync, isPending } = useRemoveProduct();
  const queryClient = useQueryClient();
  const incrementPagination = () => {
    setPagination(pagination + 1);
  };
  const decrementPagination = () => {
    pagination > 1 && setPagination(pagination - 1);
  };
  const removeProductHandler = async (id) => {
    try {
      const { data } = await mutateAsync(id);
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
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
                    tags,
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
                      <td className="table__td">
                        <div className="flex flex-wrap">
                          {tags.map((tag, index) => {
                            return (
                              <Badge
                                key={index}
                                className="text-xs bg-gray-600 text-white"
                                title={tag}
                              />
                            );
                          })}
                        </div>
                      </td>
                      <td className="table__td flex gap-1">
                        {toPersianDigits(price)}
                        <span>تومان</span>
                      </td>
                      <td className="table__td">
                        {toPersianDigits(discount)}%
                      </td>
                      <td className="table__td flex gap-1">
                        {toPersianDigits(offPrice)}
                        <span>تومان</span>
                      </td>
                      <td className="table__td">
                        {toPersianDigits(countInStock)}
                      </td>
                      <td className="table__td flex gap-4">
                        <Link
                          className="text-cyan-700"
                          href={`/admin/products/edit/${_id}`}
                        >
                          <FaRegEdit size={20} />
                        </Link>
                        <Link
                          className="text-green-600"
                          href={`/admin/products/${_id}`}
                        >
                          <IoMdEye size={20} />
                        </Link>
                        <Button
                          onClick={() => removeProductHandler(_id)}
                          className="p-0 text-red-500"
                          isPending={isPending}
                        >
                          <LuTrash2 size={20} />
                        </Button>
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
                pagination * rowsPerPage >= information?.data.products.length
              }
              className={`${
                pagination * rowsPerPage >= information?.data.products.length
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
