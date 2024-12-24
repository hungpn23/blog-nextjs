import Link from "next/link";

export interface PostProps {
  slug: string;
  title: string;
  date: string;
  wordCount: number;
  readingTime: number;
  tags: string[];
}

export function Post({ post }: { post: PostProps }) {
  return (
    <article className="border-b border-dashed border-gray-500 py-4 first:pt-0 last:border-none">
      <Link
        href={`/blog/${post.slug}`}
        className="text-link text-xl font-semibold hover:underline hover:underline-offset-4"
      >
        {post.title}
      </Link>
      <div className="mt-2 text-sm text-muted-foreground">
        <time>{post.date}</time>
        <span className="mx-1">|</span>
        <span>{post.wordCount} words</span>
        <span className="mx-1">|</span>
        <span>{post.readingTime} min</span>
        <span className="mx-1">|</span>
        {post.tags.map((tag, i) => (
          <span key={tag}>
            <Link
              href={`/blog?tag=${tag}`}
              className="text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-2"
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
