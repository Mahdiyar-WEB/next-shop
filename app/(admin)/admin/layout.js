import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";

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
          <main className="container xl:max-w-screen-xl">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
