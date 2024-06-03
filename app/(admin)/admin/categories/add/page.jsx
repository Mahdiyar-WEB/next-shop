"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import { useAddCategory } from "@/hooks/useGetCategories";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Select from "react-select";

const categoryTypes = [
  { id: 1, label: "محصول", value: "product" },
  { id: 2, label: "کامنت", value: "comment" },
  { id: 3, label: "تیکت", value: "ticket" },
  { id: 4, label: "پست", value: "post" },
];

const AddCategory = () => {
  const [category, setCategory] = useState({
    title: "",
    englishTitle: "",
    description: "",
    type: {},
  });
  const router = useRouter();
  const { isPending, mutateAsync } = useAddCategory();
  const handleChangeCategory = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const handleChangeCategoryType = (selectedType) => {
    setCategory({ ...category, type: selectedType.value });
  };
  const handleSubmitAddCategory = async (e) => {
    e.preventDefault();
    const isValidData = Object.values(category).every((item) => !!item);
    if (isValidData) {
      try {
        const response = await mutateAsync(category);
        toast.success(response.data.message);
        router.push("/admin/categories");
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    } else {
      toast.error("لطفا تمامی فیلدها را پر کنید");
    }
  };
  return (
    <main className="mt-7 w-full mx-8">
      <form
        onSubmit={handleSubmitAddCategory}
        className="sm:max-w-xl w-full mx-auto rounded-lg space-y-4 pb-10 pt-3 px-6 border shadow-lg"
      >
        <Link className="w-fit flex items-center gap-1 font-semibold text-indigo-700" href="/admin/categories">
          <HiOutlineArrowNarrowRight size={17} />
          بازگشت
        </Link>

        <h2 className="mx-auto font-bold text-2xl !mt-0 text-center mb-10">
          اضافه کردن دسته بندی
        </h2>

        <TextField
          label="موضوع"
          value={category.title}
          name="title"
          onChange={handleChangeCategory}
        />
        <TextField
          label="موضوع به انگلیسی"
          value={category.englishTitle}
          name="englishTitle"
          onChange={handleChangeCategory}
        />
        <TextField
          label="توضیحات"
          value={category.description}
          name="description"
          onChange={handleChangeCategory}
        />
        <div className="col-span-6">
          <label htmlFor="tags">دسته بندی</label>
          <Select
            instanceId="tags"
            className="my-3"
            options={categoryTypes}
            onChange={handleChangeCategoryType}
          />
        </div>
        <Button
          type="submit"
          color="primary"
          className="w-full"
          isPending={isPending}
        >
          اضافه کردن دسته بندی
        </Button>
      </form>
    </main>
  );
};

export default AddCategory;
