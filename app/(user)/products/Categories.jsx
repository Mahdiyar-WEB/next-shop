"use client";
import CheckBox from "@/common/CheckBox";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

const Categories = ({ data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const handleCategories = ({ target: { value } }) => {
    if (selectedCategories.includes(value)) {
      const otherCategories = selectedCategories.filter(
        (category) => category !== value
      );
      otherCategories.length
        ? router.push(`/products?category=${otherCategories.join(",")}`)
        : router.push("/products");
      setSelectedCategories(otherCategories);
    } else {
      router.push(
        `/products?category=${[...selectedCategories, value].join(",")}`
      );
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  return (
    <aside className="flex lg:gap-5 py-5 lg:w-[180px] px-5 shadow-md border rounded-md lg:flex-col mx-2">
      <span className="hidden lg:block whitespace-nowrap font-semibold">
        دسته بندی محصولات
      </span>
      <ul className="flex lg:flex-col gap-4 lg:gap-8  text-sm lg:text-base">
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
    </aside>
  );
};

export default Categories;
