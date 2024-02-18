"use client";
import Link from "next/link";
import React from "react";
import CartContainer from "./CartContainer";
import CartSummary from "./CartSummary";
import useAuth from "@/hooks/useAuth";

const Cart = () => {
  const { data: information, isLoading } = useAuth();
  const isUserLoggedIn = information?.data.user;
  const isProductsInCart = information?.data?.cart.productDetail.length !== 0;

  return (
    <section className="grid grid-cols-12 gap-3">
      {isLoading ? (
        <Loading />
      ) : !isUserLoggedIn ? (
        <PleaseLogin />
      ) : !isProductsInCart ? (
        <NoProduct />
      ) : (
        <>
          <CartContainer cartInformation={information?.data?.cart} />
          <CartSummary {...information?.data?.cart?.payDetail} />
        </>
      )}
    </section>
  );
};

const Loading = () => {
  return (
    <div className="flex flex-col gap-2 border col-span-9">
      <h1>Loading...</h1>
    </div>
  );
};

const PleaseLogin = () => {
  return (
    <div className="flex flex-col gap-2 border col-span-9">
      <h1 className="text-xl font-semibold">
        لطفا ابتدا وارد حساب کاربری شوید
      </h1>
      <Link className="text-primary-900 font-semibold" href="/login">
        برای ورود کلیک کنید
      </Link>
    </div>
  );
};

const NoProduct = () => {
  return (
    <div className="flex flex-col gap-2 border col-span-9">
      <h1 className="text-xl font-semibold">سبد خرید شما خالی است</h1>
      <Link className="text-primary-900 font-semibold" href="/products">
        برای رفتن به صفحه محصولات کلیک کنید
      </Link>
    </div>
  );
};
export default Cart;
