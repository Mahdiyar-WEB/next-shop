"use client";
import Button from "@/common/Button";
import TextField from "@/common/TextField";
import { useGetCategories } from "@/hooks/useGetCategories";
import { useEditProduct } from "@/hooks/useGetProducts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";

const EditProductSchema = [
  { id: 1, name: "title", label: "نام کالا", type: "text" },
  { id: 2, name: "description", label: "توضیحات", type: "text" },
  { id: 3, name: "slug", label: "اسلاگ", type: "text" },
  { id: 4, name: "brand", label: "برند", type: "text" },
  { id: 5, name: "price", label: "قیمت (تومان)", type: "number" },
  { id: 6, name: "discount", label: "تخفیف (درصد)", type: "number" },
  { id: 7, name: "offPrice", label: "قیمت با تخفیف (تومان)", type: "number" },
  { id: 8, name: "countInStock", label: "موجودی", type: "number" },
  { id: 9, name: "imageLink", label: "لینک تصویر", type: "text" },
];

const EditProductDetails = ({ productDetails }) => {
  const router = useRouter();
  const { isPending, mutateAsync } = useEditProduct();
  const [product, setProduct] = useState(productDetails);
  const { data: information } = useGetCategories();
  const handleChangeProduct = (e, type) => {
    switch (type) {
      case "product":
        setProduct({ ...product, [e?.target?.name]: e?.target?.value });
        return;
      case "category":
        setProduct({ ...product, category: e });
        return;
      case "tags": {
        setProduct({ ...product, tags: e });
        return;
      }
      default:
        return;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync(product, product._id);
      toast.success(data.message);
      router.push("/admin/products");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Link
        className="w-fit flex items-center gap-1 font-semibold text-indigo-700"
        href="/admin/products"
      >
        <HiOutlineArrowNarrowRight size={17} />
        بازگشت
      </Link>
      <h1 className="text-2xl mb-10 text-center font-semibold">
        ویرایش کردن محصول
      </h1>
      <form className="grid grid-cols-6 gap-3" onSubmit={handleSubmit}>
        {EditProductSchema.map(({ id, label, name, type }) => {
          return (
            <div key={id} className="col-span-3">
              <TextField
                type={type}
                label={label}
                name={name}
                value={product[name]}
                onChange={(e) => handleChangeProduct(e, "product")}
              />
            </div>
          );
        })}
        <div className="col-span-6">
          <label htmlFor="tags">دسته بندی</label>
          <Select
            instanceId="tags"
            className="my-3"
            options={information?.data.categories}
            onChange={(e) => handleChangeProduct(e, "category")}
            defaultValue={product.category}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
          />
        </div>
        <div className="col-span-6">
          <label htmlFor="tags">تگ ها</label>
          <TagsInput
            id="tags"
            value={product.tags}
            onChange={(e) => handleChangeProduct(e, "tags")}
          />
        </div>
        <Button
          isPending={isPending}
          type="submit"
          color="primary"
          className="col-span-6"
        >
          ویرایش
        </Button>
      </form>
    </>
  );
};

export default EditProductDetails;
