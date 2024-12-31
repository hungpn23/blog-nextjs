"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { protectedRoutes } from "@/middleware";

export function LoginBtn({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const checkRoutes = (pathname: string) => {
    if (protectedRoutes.includes(pathname) || pathname === "/login")
      return true;

    return false;
  };

  return (
    <Button variant="ghost" size="icon" className={className} asChild>
      <Link href="/login" className={checkRoutes(pathname) ? "hidden" : ""}>
        {children}
      </Link>
    </Button>
  );
}
