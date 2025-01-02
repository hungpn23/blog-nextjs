import { NextResponse } from "next/server";
import { protectedRoutes, publicRoutes } from "./lib/constants";
import { getUser } from "./actions/fetch-data.action";
import type { NextRequest } from "next/server";

async function isAuthenticated() {
  const response = await getUser();

  if ("statusCode" in response) return false;

  return true;
}

export default async function middleware(req: NextRequest) {
  const validated = await isAuthenticated();
  const pathname = req.nextUrl.pathname;

  if (protectedRoutes.includes(pathname) && !validated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (publicRoutes.includes(pathname) && validated) {
    return NextResponse.redirect(new URL("/", req.url));
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
