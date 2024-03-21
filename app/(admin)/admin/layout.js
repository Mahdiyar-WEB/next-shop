import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";
import AdminSideBar from "./AdminSideBar";

export const metadata = {
  title: "پنل ادمین",
  description: "پنل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <div className="flex relative h-screen w-screen">
            <AdminSideBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
