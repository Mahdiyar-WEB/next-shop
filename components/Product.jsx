"use client";
import toPersianDigits from "@/utils/toPersianDigits";
import Link from "next/link";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { MdClear } from "react-icons/md";
import Badge from "@/common/Badge";
import Button from "@/common/Button";
import AddToCart from "./AddToCart";
import LikeProduct from "./LikeProduct";

const Product = ({
  _id,
  title,
  description,
  slug,
  imageLink,
  price,
  discount,
  offPrice,
  tags,
  likesCount,
  isLiked,
  countInStock,
  rating,
  numReviews,
}) => {
  return (
    <div className="col-span-12 w-[90%] md:col-span-6 xl:col-span-4 shadow-md border rounded-md px-4 mx-auto">
      <h5 className="text-lg font-semibold">
        <Link href={`/products/${slug}`}>{title}</Link>
      </h5>
      <p className="text-justify text-sm text-secondary-800">{description}</p>
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
              {toPersianDigits(price)}
            </span>
            <p className="bg-red-600 rounded-xl px-2 py-[1px] font-semibold text-xs w-fit text-white">
              % {toPersianDigits(discount)}
            </p>
          </p>
          <p className="flex gap-1 items-center font-semibold">
            <span className="text-sm">{toPersianDigits(offPrice)}</span>
            <span className="text-secondary-500 text-xs ">تومان</span>
          </p>
        </div>
      ) : (
        <p className="flex gap-1 items-center text-sm font-semibold">
          <span>{toPersianDigits(price)}</span>
          <span className="text-secondary-500 text-xs ">تومان</span>
        </p>
      )}
      <p>rating: {rating}</p>
      <p className="bg-secondary-200 w-fit px-2 py-1 rounded-lg flex items-center gap-2 text-secondary-600 text-sm">
        <span>
          <BiCommentDetail size={18} />
        </span>
        <span className="text-secondary-800">
          {toPersianDigits(numReviews)}
        </span>
      </p>
      <LikeProduct productId={_id} isLiked={isLiked} likesCount={likesCount} />
      <Button color="primary" className="text-sm px-0 py-0">
        <Link className="px-3 py-2 inline-block" href={`/products/${slug}`}>
          مشاهده
        </Link>
      </Button>
      <AddToCart productId={_id} />
    </div>
  );
};

export default Product;
