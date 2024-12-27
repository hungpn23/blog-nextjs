"use client";

import type { TagType } from "@/types/data.type";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Tag({
  tag,
  key,
  className,
}: {
  tag: TagType;
  key: string;
  className?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");

  const getHref = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (currentTag !== tag.name) {
      params.set("tag", tag.name);
      params.set("page", "1"); // Reset to first page when filter tag
    } else {
      params.delete("tag");
    }

    return `${pathname}?${params.toString()}`;
  };

  const isSelected = currentTag === tag.name;

  return (
    <Link
      key={key}
      href={getHref()}
      className={cn(
        className,
        currentTag === tag.name && "bg-foreground text-primary",
        "rounded-sm bg-muted px-1 text-base hover:underline hover:underline-offset-2",
      )}
      role="button"
      aria-label={`Filter by ${tag.name} tag`}
      aria-pressed={isSelected}
      aria-current={isSelected ? "true" : undefined}
    >
      <span className="sr-only">Filter posts with tag:</span>
      {tag.name}
    </Link>
  );
}
