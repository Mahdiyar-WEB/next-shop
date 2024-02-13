"use client";
import Badge from "@/common/Badge";
import Button from "@/common/Button";
import { useAddToCart } from "@/hooks/useAddToCart";
import useAuth from "@/hooks/useAuth";
import toPersianDigits from "@/utils/toPersianDigits";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { MdClear, MdDone } from "react-icons/md";

const SingleProduct = ({
  _id,
  title,
  description,
  slug,
  category,
  imageLink,
  price,
  discount,
  offPrice,
  brand,
  tags,
  isLiked,
  countInStock,
  rating,
  numReviews,
  createdAt,
  updatedAt,
}) => {
  const { isPending, mutateAsync } = useAddToCart();
  const { data: information } = useAuth();
  const queryClient = useQueryClient();
  const router = useRouter();

  const addToCartHandler = async () => {
    if (!information) {
      toast.error("لطفا ابتدا لاگین کنید");
      router.push("/login");
      return;
    }

    try {
      const { data } = await mutateAsync(_id);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-profile"] }); // this method will call to invalidate our queryClient and update user information
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="shadow-lg border px-5 py-3 rounded-md">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-justify text-lg text-secondary-800">{description}</p>

      {!!countInStock ? (
        <p className="flex items-center gap-1 bg-green-500 w-fit rounded-lg px-3 py-1 text-sm text-white">
          <span>
            <MdDone />
          </span>
          <span>موجود</span>
        </p>
      ) : (
        <p className="flex items-center gap-1 bg-red-500 w-fit rounded-lg px-3 py-1 text-sm text-white">
          <span>
            <MdClear size={16} />
          </span>
          <span>ناموجود</span>
        </p>
      )}
      {!!discount ? (
        <div className="flex flex-col text-secondary-800">
          <p className="flex items-center gap-[6px]">
            <span className="text-secondary-500 font-medium text-xs line-through">
              {toPersianDigits(price.toLocaleString())}
            </span>
            <p className="bg-red-600 rounded-xl px-2 py-[1px] font-semibold text-xs w-fit text-white">
              % {toPersianDigits(discount)}
            </p>
          </p>
          <p className="flex gap-1 items-center font-semibold">
            <span className="text-sm">
              {toPersianDigits(offPrice.toLocaleString())}
            </span>
            <span className="text-secondary-500 text-xs ">تومان</span>
          </p>
        </div>
      ) : (
        <p className="flex gap-1 items-center text-sm font-semibold">
          <span>{toPersianDigits(price.toLocaleString())}</span>
          <span className="text-secondary-500 text-xs ">تومان</span>
        </p>
      )}

      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => {
          return (
            <Badge
              className="bg-secondary-200 text-secondary-800"
              key={index}
              title={tag}
              icon={"#"}
            />
          );
        })}
      </div>
      <Button
        isPending={isPending}
        onClick={() => addToCartHandler()}
        color="primary"
      >
        اضافه کردن به سبد خرید
      </Button>
    </div>
  );
};

export default SingleProduct;
