"use client";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useRemoveFromCart } from "@/hooks/useRemoveFromCart";
import { useDeleteFromCart } from "@/hooks/useDeleteFromCart";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toPersianDigits from "@/utils/toPersianDigits";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaTrashCan } from "react-icons/fa6";
import { LuPlus, LuMinus } from "react-icons/lu";

const CartItem = ({
  title,
  discount,
  price,
  offPrice,
  quantity,
  slug,
  _id,
}) => {
  const { isPending: addToCartLoading, mutateAsync: addToCartMutateAsync } =
    useAddToCart();
  const {
    isPending: removeFromCartLoading,
    mutateAsync: removeFromCartMutateAsync,
  } = useRemoveFromCart();
  const {
    isPending: deleteFromCartLoading,
    mutateAsync: deleteFromCartMutateAsync,
  } = useDeleteFromCart();

  const queryClient = useQueryClient();

  const addToCartHandler = async () => {
    try {
      const { data } = await addToCartMutateAsync(_id);
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const removeFromCartHandler = async () => {
    try {
      const { data } = await removeFromCartMutateAsync(_id);
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const deleteFromCartHandler = async () => {
    try {
      const { data } = await deleteFromCartMutateAsync(_id);
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["get-profile"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="border rounded-lg flex justify-between overflow-hidden h-fit">
      <div className="py-6 px-3 flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <Link className="text-xl font-semibold" href={`products/${slug}`}>
            {title}
          </Link>
          {/* quantity */}
          <div className="flex flex-col items-center  w-fit">
            <span className="text-center text-sm font-semibold">تعداد</span>
            <div className="flex border gap-3 w-fit items-center rounded-md overflow-hidden">
              <button
                onClick={addToCartHandler}
                className="bg-primary-900 p-[4px] text-white h-8"
              >
                {addToCartLoading ? (
                  <svg
                    class="animate-spin h-[22px] w-[22px] inline-block border-2 border-secondary-200 border-l-white rounded-full"
                    viewBox="0 0 24 24"
                  ></svg>
                ) : (
                  <LuPlus size={22} />
                )}
              </button>
              {toPersianDigits(quantity)}
              <button
                onClick={removeFromCartHandler}
                className="bg-red-600 p-[4px] text-white h-8"
              >
                {removeFromCartLoading ? (
                  <svg
                    class="animate-spin h-[22px] w-[22px] inline-block border-2 border-secondary-200 border-l-white rounded-full"
                    viewBox="0 0 24 24"
                  ></svg>
                ) : (
                  <LuMinus size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          {/* price */}
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
                <span className="text-sm">
                  {toPersianDigits(offPrice)}
                </span>
                <span className="text-secondary-500 text-xs ">تومان</span>
              </p>
            </div>
          ) : (
            <p className="flex gap-1 items-center text-sm font-semibold">
              <span>{toPersianDigits(price)}</span>
              <span className="text-secondary-500 text-xs ">تومان</span>
            </p>
          )}
        </div>
      </div>
      <button
        onClick={deleteFromCartHandler}
        className="bg-red-600 text-white px-1 "
      >
        {deleteFromCartLoading ? (
          <svg
            class="animate-spin h-[16px] w-[16px] inline-block border-2 border-secondary-200 border-l-white rounded-full"
            viewBox="0 0 24 24"
          ></svg>
        ) : (
          <FaTrashCan />
        )}
      </button>
    </div>
  );
};

export default CartItem;
