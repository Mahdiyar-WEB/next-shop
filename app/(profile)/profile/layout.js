import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";
import SideBar from "./SideBar";
import Menu from "./Menu";

export const metadata = {
  title: "پنل کاربر",
  description: "پنل کاربر",
};

const links = [
  { title: "حساب کاربری", href: "/profile/me" },
  { title: "داشبورد", href: "/profile" },
  { title: "صفحه اصلی", href: "/" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <div className="flex relative h-screen w-screen">
            {/* tablet,desktop size*/}
            <SideBar links={links} />
            {/* mobile size*/}
            <Menu links={links} />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
