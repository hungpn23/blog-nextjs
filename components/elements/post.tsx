import dayjs from "dayjs";
import Link from "next/link";
import type { PostTagsType } from "@/types/data.type";
import { TagV2 } from "../client-components/tag-v2";

export function Post({ post }: { post: PostTagsType }) {
  return (
    <article className="border-b border-dashed border-gray-500 py-4 first:pt-0 last:border-none">
      <Link
        href={`/blog/${post.slug}`}
        className="text-xl font-semibold text-link hover:underline hover:underline-offset-4"
        aria-labelledby={`post-title-${post.slug}`}
      >
        {post.title}
      </Link>

      <div
        className="mt-2 text-sm text-muted-foreground"
        aria-label="Post metadata"
      >
        <time>{dayjs(post.createdAt).format("HH:mm DD-MM-YYYY")}</time>
        <span className="mx-1">·</span>
        <span>{post.wordCount} words</span>
        <span className="mx-1">·</span>
        <span>{post.readingTime} min</span>
        <span className="mx-1">·</span>

        {post.tags.map((tag) => (
          <TagV2 key={tag.id} tag={tag} className="mx-1" />
        ))}
      </div>
    </article>
  );
}
