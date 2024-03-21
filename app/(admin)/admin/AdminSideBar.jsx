"use client";
import Button from "@/common/Button";
import { logout } from "@/services/authServices";
import Link from "next/link";
import { toast } from "react-hot-toast";

const links = [
  { title: "صفحه اصلی", href: "/" },
  { title: "داشبورد", href: "/admin" },
  { title: "کاربران", href: "/admin/users" },
  { title: "محصولات", href: "/admin/products" },
  { title: "دسته بندی ها", href: "/admin/categories" },
  { title: "کد تخفیف", href: "/admin/coupons" },
  { title: "سفارشات", href: "/admin/payments" },
];

const AdminSideBar = () => {
  const handleLogout = async () => {
    try {
      await logout();
      document.location.href = "/";
    } catch (error) {
      toast.error("مشکل در اجرای درخواست");
    }
  };
  return (
    <aside className="m-0 right-0 top-0  h-screen  z-20 hidden md:block">
      <div className="flex flex-col h-[100dvh] w-[200px] bg-white text-slate-700 shadow-md">
        {/* links */}
        <ul className="pt-0 font-semibold flex flex-col">
          {links.map(({ title, href }, index) => {
            return (
              <li key={title}>
                <Link
                  className="px-4 flex items-center w-full duration-300 ease-in hover:-translate-x-2 h-14"
                  href={href}
                >
                  {title}
                </Link>
                {index + 1 !== links.length && (
                  <hr className="h-px self-stretch opacity-20 bg-slate-900" />
                )}
              </li>
            );
          })}
          <hr className="mt-4" />
          <Button className="ps-3 text-start" onClick={() => handleLogout()}>
            خروج از حساب کاربری
          </Button>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSideBar;
