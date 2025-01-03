import { Post } from "@/components/server-components/post";
import { getAllTags, getPaginatedPosts } from "@/actions/fetch-data.action";
import { SearchParams } from "nuqs/server";
import { searchParamsCache } from "@/lib/search-params";
import { PaginationV2 } from "@/components/client-components/pagination-v2";
import { TagV2 } from "@/components/client-components/tag-v2";
import { Container } from "@/components/layouts/container";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // upgrade to nuqs --> more readable code
  const { page, limit, order, tag } = searchParamsCache.parse(
    await searchParams,
  );

  const [paginated, tags] = await Promise.all([
    await getPaginatedPosts(page, limit, order, tag),
    await getAllTags(),
  ]);

  if ("statusCode" in paginated || "statusCode" in tags) {
    throw new Error("Failed to fetch data");
  }

  return (
    <Container>
      <div className="flex flex-wrap gap-2 pb-8">
        {tags?.map((tag) => <TagV2 key={tag.id} tag={tag} />)}
      </div>

      <div className="flex flex-col flex-wrap">
        {paginated.paginatedData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <PaginationV2
        key={paginated.metadata.totalPages}
        metadata={paginated.metadata}
      />
    </Container>
  );
}
