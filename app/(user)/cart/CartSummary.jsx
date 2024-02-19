import Button from "@/common/Button";
import toPersianDigits from "@/utils/toPersianDigits";
import React from "react";

const CartSummary = ({
  totalPrice = 0,
  totalOffAmount = 0,
  totalGrossPrice = 0,
}) => {
  return (
    <aside className="border rounded-lg shadow-md col-span-3 px-3 py-5 h-fit">
      <p className="text-center font-semibold mb-4">اطلاعات پرداخت</p>
      <div className="flex justify-between mb-4">
        <span>جمع کل:</span>
        <p className="flex gap-1 items-center">
          <span>{toPersianDigits(totalGrossPrice)}</span>
          <span className="text-xs text-secondary-600 font-semibold">
            تومان
          </span>
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <span>تخفیف:</span>
        <p className="flex gap-1 items-center">
          <span>{toPersianDigits(totalOffAmount)}</span>
          <span className="text-xs text-secondary-600 font-semibold">
            تومان
          </span>
        </p>
      </div>
      <hr className="mb-3" />
      <div className="flex justify-between mb-8 font-bold">
        <span>مبلغ نهایی:</span>
        <p className="flex gap-1 items-center">
          <span>{toPersianDigits(totalPrice)}</span>
          <span className="text-xs text-secondary-600">تومان</span>
        </p>
      </div>
      <Button color="primary" className="w-full">
        ثبت سفارش
      </Button>
    </aside>
  );
};

export default CartSummary;
