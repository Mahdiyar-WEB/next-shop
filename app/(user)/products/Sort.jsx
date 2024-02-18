"use client";
import RadioInput from "@/common/RadioInput";
import React, { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
  {
    id: 1,
    value: "latest",
    label: "جدید ترین",
  },
  {
    id: 2,
    value: "earliest",
    label: "قدیمی ترین",
  },
  {
    id: 3,
    value: "popular",
    label: "محبوب ترین",
  },
];

const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [sort, setSort] = useState(searchParams.get("filter"));

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSortChange = (e) => {
    router.push(pathname + "?" + createQueryString("sort", e.target.value));
    setSort(e.target.value);
  };

  return (
    <div className="flex lg:gap-5 py-5 lg:w-[180px] px-5 border rounded-md lg:flex-col mx-2">
      <span className="hidden lg:block whitespace-nowrap font-semibold">
        مرتب سازی محصولات
      </span>
      <ul className="flex lg:flex-col gap-4 text-sm lg:text-base">
        {sortOptions.map(({ id, label, value }) => {
          return (
            <li key={id}>
              <RadioInput
                title={label}
                value={value}
                checked={sort === value}
                onChange={handleSortChange}
                name="products-sort"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sort;
