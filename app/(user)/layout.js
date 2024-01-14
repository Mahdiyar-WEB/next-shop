import vazirFont from "@/constants/localFonts";
import "../globals.css";
import Header from "@/app/(user)/Header";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";

export const metadata = {
  title: "فروشگاه",
  description: "فروشگاه نکست جی اس",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <Header />
          <main className="container xl:max-w-screen-xl">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
