"use client";
import Link from "next/link";
import React from "react";

const Categories = ({ response }) => {
  console.log("🚀 ~ data ~ data:", response.data.categories);
  return (
    <div>
      <div className="flex lg:gap-5 py-5 lg:w-[180px] px-5 shadow-md border rounded-md lg:flex-col mx-2">
        <span className="hidden lg:block whitespace-nowrap">دسته بندی محصولات</span>
        <ul className="flex lg:flex-col gap-4 lg:gap-8 font-semibold text-sm lg:text-base">
          <li>
            <Link href="/products">همه</Link>
          </li>
          {response?.data?.categories?.map((category, index) => {
            return (
              <li key={index}>
                <Link href={`/products/${category.englishTitle}`}>
                  {category.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
