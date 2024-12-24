"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  path: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ path, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`text-base hover:underline hover:underline-offset-4 ${
        pathname === path ? "underline underline-offset-4" : ""
      }`}
    >
      {children}
    </Link>
  );
};