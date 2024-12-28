import { cn } from "@/lib/utils";
import * as React from "react";

export function PageBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <main className={cn(className, "py-16 sm:py-24")}>{children}</main>;
}
