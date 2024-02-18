"use client";
import CheckBox from "@/common/CheckBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const Categories = ({ data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategories = ({ target: { value } }) => {
    if (selectedCategories.includes(value)) {
      const otherCategories = selectedCategories.filter(
        (category) => category !== value
      );
      router.push(
        pathname + "?" + createQueryString("category", otherCategories)
      );
      setSelectedCategories(otherCategories);
    } else {
      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategories, value])
      );
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  return (
    <div className="flex lg:gap-5 py-5 lg:w-[180px] px-5 border rounded-md lg:flex-col mx-2">
      <span className="hidden lg:block whitespace-nowrap font-semibold">
        دسته بندی محصولات
      </span>
      <ul className="flex lg:flex-col gap-4 text-sm lg:text-base">
        {data?.categories?.map(({ _id, title, englishTitle }) => {
          return (
            <li key={_id}>
              <CheckBox
                id={_id}
                title={title}
                value={englishTitle}
                name="product-category"
                checked={selectedCategories.includes(englishTitle)}
                onChange={handleCategories}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
