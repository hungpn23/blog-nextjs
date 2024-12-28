import { Post } from "@/components/elements/post";
import { PageBody } from "@/components/layouts/page-body";
import { getAllTags, getPaginatedPosts } from "@/actions/fetch-data.action";
import { SearchParams } from "nuqs/server";
import { searchParamsCache } from "@/lib/search-params";
import { PaginationV2 } from "@/components/client-components/pagination-v2";
import { TagV2 } from "@/components/elements/tag-v2";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // upgrade to nuqs --> more readable code
  const { page, limit, order, tag } = searchParamsCache.parse(
    await searchParams,
  );

  const [{ data, metadata }, tags] = await Promise.all([
    await getPaginatedPosts(page, limit, order, tag),
    await getAllTags(),
  ]);

  return (
    <PageBody>
      <div className="flex flex-wrap gap-2 pb-8">
        {tags.map((tag) => (
          <TagV2 key={tag.id} tag={tag} />
        ))}
      </div>

      <div className="flex flex-col flex-wrap">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <PaginationV2 key={metadata.totalPages} metadata={metadata} />
    </PageBody>
  );
}
