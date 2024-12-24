"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface ITagCount {
  [key: string]: number;
}

export function TagFilter({ tags }: { tags: ITagCount }) {
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");

  return (
    <div className="flex flex-wrap gap-2 py-4">
      {Object.entries(tags).map(([tag, count]) => (
        <Link
          key={tag}
          href={currentTag === tag ? "/blog" : `/blog?tag=${tag}`}
          className={`rounded-full border-2 bg-muted px-2 py-1 text-sm ${
            currentTag === tag
              ? "border-foreground bg-foreground text-background"
              : "border-border hover:border-foreground"
          }`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
