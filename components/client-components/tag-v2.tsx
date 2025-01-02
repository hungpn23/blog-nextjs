"use client";

import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import type { TagType } from "@/types/data.type";

export function TagV2({
  tag,
  key,
  className,
}: {
  tag: TagType;
  key: string;
  className?: string;
}) {
  const [currentTag, setCurrentTag] = useQueryState("tag", {
    shallow: false,
    scroll: true,
  });

  const toggleTag = () => {
    if (currentTag === tag.name) {
      setCurrentTag(null);
    } else {
      setCurrentTag(tag.name);
    }
  };

  return (
    <span
      key={key}
      className={cn(
        className,
        currentTag === tag.name && "bg-foreground text-primary",
        "cursor-pointer rounded-sm bg-muted px-1 text-base hover:underline hover:underline-offset-2",
      )}
      aria-label={`Filter by ${tag.name} tag`}
      onClick={toggleTag}
    >
      <span className="sr-only">Filter posts with tag:</span>
      {tag.name}
    </span>
  );
}
