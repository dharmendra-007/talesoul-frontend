import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/login", "/signup", "/forgot-password"];

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("talesoul_refresh")?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = publicPaths.some(path => pathname.startsWith(path));
  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/community") || 
    pathname.startsWith("/consultant/beamentor");

  if (isAuthRoute && refreshToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isProtectedRoute && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/forgot-password",
    "/dashboard/:path*",
    "/profile/:path*",
    "/community/:path*",
    "/consultant/beamentor/:path*"
  ],
};
