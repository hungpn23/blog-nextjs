import Link from "next/link";

export interface IPost {
  slug: string;
  title: string;
  date: string;
  wordCount: number;
  readingTime: number;
  tags: string[];
}

export function Post({ post }: { post: IPost }) {
  return (
    <article className="border-b border-dotted py-8 first:pt-0 last:border-none">
      <Link
        href={`/blog/${post.slug}`}
        className="text-lg font-medium text-[hsl(222,75%,55%)] hover:underline"
      >
        {post.title}
      </Link>
      <div className="mt-2 text-sm text-muted-foreground">
        <time>{post.date}</time>
        <span className="mx-1">·</span>
        <span>{post.wordCount} words</span>
        <span className="mx-1">·</span>
        <span>{post.readingTime} min</span>
        <span className="mx-1">·</span>
        {post.tags.map((tag, i) => (
          <span key={tag}>
            <Link
              href={`/blog?tag=${tag}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {tag}
            </Link>
            {i < post.tags.length - 1 && " "}
          </span>
        ))}
      </div>
    </article>
  );
}
