"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { AuthContext } from "@/contexts/auth.context";
import { use } from "react";
import { usePathname } from "next/navigation";

export function LoginBtn({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { isAuthenticated } = use(AuthContext);
  const pathname = usePathname();

  const checkHidden = () => {
    if (isAuthenticated || pathname === "/login") return "hidden";
  };

  return (
    <Button variant="ghost" size="icon" className={className} asChild>
      <Link href="/login" className={checkHidden()}>
        {children}
      </Link>
    </Button>
  );
}
