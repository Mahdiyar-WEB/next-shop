import { NextResponse } from "next/server";
import userAuthorization from "./utils/userAuthorization";

export async function middleware(request) {
  const url = request.url;
  const pathname = request.nextUrl.pathname;
  const user = await userAuthorization(request);

  if (pathname.startsWith("/admin")) {
    if (!user || user?.role !== "ADMIN")
      return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/profile")) {
    if (!user) return NextResponse.redirect(new URL("/login", url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*"],
};
