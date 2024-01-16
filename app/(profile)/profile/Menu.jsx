"use client";
import Button from "@/common/Button";
import Link from "next/link";
import React from "react";

const Menu = ({ links }) => {
  const handleLogout = async () => {
    try {
      await logout();
      document.location.href = "/";
    } catch (error) {
      toast.error("مشکل در اجرای درخواست");
    }
  };
  return (
    <header className="fixed z-10 bottom-6 md:hidden bg-white left-0 right-0 border w-5/6 mx-auto px-4 py-3 rounded-lg shadow-md">
      <ul className="flex justify-between">
        {links.map(({ title, href }) => {
          return (
            <li key={title}>
              <Link href={href} className="text-xs">{title}</Link>
            </li>
          );
        })}
        <Button className="font-normal text-xs" onClick={handleLogout}>خروج از حساب کاربری</Button>
      </ul>
    </header>
  );
};

export default Menu;
