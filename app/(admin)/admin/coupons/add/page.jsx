"use client";
import Button from "@/common/Button";
import RadioInput from "@/common/RadioInput";
import TextField from "@/common/TextField";
import { useAddCoupon } from "@/hooks/useGetCoupons";
import { useGetProducts } from "@/hooks/useGetProducts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import DatePicker from "react-multi-date-picker";
import Select from "react-select";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";

const AddCoupon = () => {
  const { data: information } = useGetProducts();
  const [coupon, setCoupon] = useState({
    code: "",
    amount: 0,
    usageLimit: 0,
  });
  const [type, setType] = useState("percent");
  const [productIDs, setProductIDs] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());

  const router = useRouter();

  const { isPending, mutateAsync } = useAddCoupon();

  const handleChangeCoupon = (e) => {
    setCoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  const handleSubmitAddCoupon = async (e) => {
    e.preventDefault();
    const isValidData = Object.values(coupon).every((item) => !!item);
    if (isValidData) {
      try {
        const response = await mutateAsync({
          ...coupon,
          type, 
          expireDate: new Date(expireDate).toISOString(),
          productIds: productIDs.map((product) => product?._id),
        });
        toast.success(response.data.message);
        router.push("/admin/coupons");
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
        onSubmit={handleSubmitAddCoupon}
        className="sm:max-w-xl w-full mx-auto rounded-lg space-y-4 pb-10 pt-3 px-6 border shadow-lg"
      >
        <Link
          className="w-fit flex items-center gap-1 font-semibold text-indigo-700"
          href="/admin/coupons"
        >
          <HiOutlineArrowNarrowRight size={17} />
          بازگشت
        </Link>

        <h2 className="mx-auto font-bold text-2xl !mt-0 text-center mb-10">
          اضافه کردن کد تخفیف
        </h2>

        <TextField
          label="کد"
          value={coupon.code}
          name="code"
          onChange={handleChangeCoupon}
        />
        <TextField
          label="مقدار"
          value={coupon.amount}
          name="amount"
          type="number"
          onChange={handleChangeCoupon}
        />
        <TextField
          label="ظرفیت  "
          type="number"
          value={coupon.usageLimit}
          name="usageLimit"
          onChange={handleChangeCoupon}
        />
        <div className="flex gap-4 py-4">
          <RadioInput
            title="درصد"
            checked={type === "percent"}
            id="percent-type"
            name="percent"
            value="percent"
            onChange={(e) => setType(e.target.value)}
          />
          <RadioInput
            title="قیمت ثابت"
            checked={type === "fixedProduct"}
            id="fixedProduct-type"
            name="fixedProduct"
            value="fixedProduct"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="col-span-6">
          <label htmlFor="tags">اعمال روی محصولات</label>
          <Select
            instanceId="tags"
            className="my-3"
            options={information?.data.products}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
            onChange={setProductIDs}
            isMulti
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="date">تاریخ انقضا</label>

          <DatePicker
            id="date"
            value={expireDate}
            onChange={(date) => setExpireDate(date)}
            format="YYYY/MM/DD"
            calendar={persian}
            locale={persian_fa}
            minDate={new Date()}
            hideWeekDays
            animations={[opacity()]}
            inputClass="textField__input"
            calendarPosition="bottom"
          />
        </div>
        <Button
          type="submit"
          color="primary"
          className="w-full"
          isPending={isPending}
        >
          اضافه کردن کد تخفیف
        </Button>
      </form>
    </main>
  );
};

export default AddCoupon;
