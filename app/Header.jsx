import Link from "next/link";
import React from "react";

const Header = () => {
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
          <Link href="/login">ورود</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
