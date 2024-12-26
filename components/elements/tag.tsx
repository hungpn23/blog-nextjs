"use client";

import { ITag } from "@/interfaces";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Tag({
  tag,
  key,
  className,
}: {
  tag: ITag;
  key: string;
  className?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");

  const getHref = () => {
    const params = new URLSearchParams(searchParams.toString());

    currentTag !== tag.name
      ? params.set("tag", tag.name)
      : params.delete("tag");

    return `${pathname}?${params.toString()}`;
  };

  return (
    <Link
      key={key}
      href={getHref()}
      className={cn(
        className,
        currentTag === tag.name && "bg-foreground text-primary",
        "rounded-sm bg-muted px-1 text-base hover:underline hover:underline-offset-2",
      )}
    >
      {tag.name}
    </Link>
  );
}
