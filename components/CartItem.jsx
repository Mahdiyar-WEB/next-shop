import toPersianDigits from "@/utils/toPersianDigits";
import Link from "next/link";
import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { LuPlus, LuMinus } from "react-icons/lu";

const CartItem = ({ title, discount, price, offPrice, quantity, slug }) => {
  return (
    <div className="border rounded-lg flex justify-between overflow-hidden">
      <div className="py-2 px-3 flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <Link className="text-xl font-semibold" href={`products/${slug}`}>
            {title}
          </Link>
          {/* quantity */}
          <div className="flex flex-col items-center  w-fit">
            <span className="text-center text-sm font-semibold">تعداد</span>
            <div className="flex border gap-3 w-fit items-center rounded-md overflow-hidden">
              <button className="bg-primary-900 p-[2px] text-white ">
                <LuPlus size={22} />
              </button>
              {toPersianDigits(quantity)}
              <button className="bg-red-600 p-[2px] text-white h-full">
                <LuMinus size={22} />
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
        </div>
      </div>
      <button className="bg-red-600 text-white px-1 ">
        <FaTrashCan />
      </button>
    </div>
  );
};

export default CartItem;
