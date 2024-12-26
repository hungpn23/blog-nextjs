import Link from "next/link";
import { Tag } from "./tag";
import { IPost } from "@/interfaces";

export function Post({ post }: { post: IPost }) {
  return (
    <article className="border-b border-dashed border-gray-500 py-4 first:pt-0 last:border-none">
      <Link
        href={`/blog/${post.slug}`}
        className="text-xl font-semibold text-link hover:underline hover:underline-offset-4"
      >
        {post.title}
      </Link>

      <div className="mt-2 text-sm text-muted-foreground">
        <time>{post.createdAt}</time>
        <span className="mx-1">·</span>
        <span>{post.wordCount} words</span>
        <span className="mx-1">·</span>
        <span>{post.readingTime} min</span>
        <span className="mx-1">·</span>
        {post.tags.map((tag) => (
          <Tag key={tag.id} tag={tag} className="mx-1" />
        ))}
      </div>
    </article>
  );
}
