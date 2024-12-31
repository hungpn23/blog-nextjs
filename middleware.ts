import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AxiosService } from "./lib/axios";
import { UserType } from "./types/data.type";
import { AxiosError } from "axios";

export const protectedRoutes = ["/profile"];

export default async function middleware(req: NextRequest) {
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    const token = req.cookies.get("access_token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      try {
        await AxiosService.get<UserType>("/user");
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error(
            "Auth error in middleware:",
            error.response?.data.message || "unknown error",
          );
        }
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
