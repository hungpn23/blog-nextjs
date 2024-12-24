"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface TagCountProps {
  [key: string]: number;
}

export function TagFilter({ tags }: { tags: TagCountProps }) {
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");

  return (
    <div className="flex flex-wrap gap-2 py-4">
      {Object.entries(tags).map(([tag]) => (
        <Link
          key={tag}
          href={currentTag === tag ? "/blog" : `/blog?tag=${tag}`}
          className={`rounded-sm bg-muted px-1 text-base hover:underline hover:underline-offset-2 ${
            currentTag === tag ? "bg-foreground text-primary" : ""
          }`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
