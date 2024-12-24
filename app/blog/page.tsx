import { TagFilter } from "@/components/tag-filter";
import { IPost, Post } from "@/components/elements/post";
import { Pagination } from "@/components/layouts/pagination";

// This would typically come from your data source
const posts: IPost[] = [
  {
    slug: "webpack-what-is-a-chunk",
    title: "Webpack: what is a chunk?",
    date: "July 24, 2024",
    wordCount: 1284,
    readingTime: 6,
    tags: ["webpack"],
  },
  {
    slug: "react-concurrent-mode",
    title: "The underlying mechanisms of React's concurrent mode",
    date: "August 19, 2023",
    wordCount: 3489,
    readingTime: 17,
    tags: ["react"],
  },
  {
    slug: "react-suspense-throttling",
    title: "On React Suspense's throttling",
    date: "August 13, 2023",
    wordCount: 1285,
    readingTime: 7,
    tags: ["react"],
  },
  {
    slug: "react-beyond-useeffect",
    title: "React: beyond useEffect",
    date: "August 8, 2023",
    wordCount: 950,
    readingTime: 5,
    tags: ["react", "web dev"],
  },
  {
    slug: "react-pragmas-tests",
    title: "How React uses pragmas to run tests conditionally",
    date: "June 29, 2023",
    wordCount: 1818,
    readingTime: 9,
    tags: ["react", "babel", "jest"],
  },
];

// Calculate tag counts
const tagCounts = posts.reduce(
  (acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  },
  {} as Record<string, number>,
);

const POSTS_PER_PAGE = 5;

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const tag = searchParams.tag;

  const filteredPosts = tag
    ? posts.filter((post) => post.tags.includes(tag))
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPagePosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div className="py-16 sm:py-24">
      <TagFilter tags={tagCounts} />
      <div className="divide-border">
        {currentPagePosts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} baseUrl="/blog" />
    </div>
  );
}
