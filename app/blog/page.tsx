import { Post } from "@/components/elements/post";
import { Pagination } from "@/components/client-components/pagination";
import { PageBody } from "@/components/layouts/page-body";
import { Tag } from "@/components/elements/tag";
import { posts, tags } from "@/data";

const POSTS_PER_PAGE = 5;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <PageBody>
      <div className="flex flex-wrap gap-2 pb-8">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>

      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </PageBody>
  );
}
