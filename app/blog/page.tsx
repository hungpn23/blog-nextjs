import { Post } from "@/components/elements/post";
import { Pagination } from "@/components/client-components/pagination";
import { PageBody } from "@/components/layouts/page-body";
import { Tag } from "@/components/elements/tag";
import { getPaginatedPosts } from "@/services/post.service";
import { getAllTags } from "@/services/tag.service";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  let currentPage = Number(params?.page);
  if (Number(params?.page) < 1 || !Number(params?.page)) currentPage = 1;

  let limit = Number(params?.limit);
  if (Number(params?.limit) < 10 || !Number(params?.limit)) limit = 10;

  let order = String(params?.order);
  if (String(params?.order) !== "ASC" && String(params?.order) !== "DESC") {
    order = "DESC";
  }

  const tag = params?.tag ? String(params.tag) : undefined;

  const [{ data, metadata }, tags] = await Promise.all([
    await getPaginatedPosts(currentPage, limit, order, tag),
    await getAllTags(),
  ]);

  return (
    <PageBody>
      <div className="flex flex-wrap gap-2 pb-8">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>

      <div className="flex flex-col flex-wrap">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <Pagination key={metadata.totalPages} metadata={metadata} />
    </PageBody>
  );
}
