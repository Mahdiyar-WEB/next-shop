"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { isLoading, data: information, error } = useAuth();

  return (
    <header className="shadow-md mb-10">
      <ul className="container xl:max-w-screen-xl flex py-4 px-6 lg:px-10 justify-between">
        <li>
          <Link href="/">خانه</Link>
        </li>
        <li>
          <Link href="/products">محصولات</Link>
        </li>
        <li>
          <Link href="/cart">سبد خرید</Link>
        </li>
        <li>
          <Link href="/admin">admin</Link>
        </li>
        {isLoading ? (
          <div
            className="flex h-6 w-6 animate-spin rounded-full text-primary-900 border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
          </div>
        ) : (
          <li>
            {information && !error ? (
              <Link href="/profile">{information.data.user.name}</Link>
            ) : (
              <Link href="/login">ورود</Link>
            )}
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
