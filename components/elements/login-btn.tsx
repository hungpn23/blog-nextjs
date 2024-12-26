"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export function LoginBtn({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Button variant="ghost" size="icon" className={className} asChild>
      <Link href="/login" className={pathname === "/login" ? "hidden" : ""}>
        {children}
      </Link>
    </Button>
  );
}
