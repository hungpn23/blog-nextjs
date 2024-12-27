import { Post } from "@/components/elements/post";
import { Pagination } from "@/components/client-components/pagination";
import { PageBody } from "@/components/layouts/page-body";
import { Tag } from "@/components/elements/tag";
import instance from "@/utils/axios";
import type { PaginatedType } from "@/types/paginated.type";
import type { PostType, TagType } from "@/types/data.type";

async function getPaginatedPosts(
  currentPage: number,
  limit: number,
  order: string = "DESC",
) {
  const { data } = await instance.get<PaginatedType<PostType>>(
    `/post?page=${currentPage}&limit=${limit}&order=${order}`,
  );

  return data as PaginatedType<PostType>;
}

async function getAllTags() {
  const { data } = await instance.get<TagType[]>("/tag");
  return data;
}

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

  const tags = await getAllTags();
  const { data, metadata } = await getPaginatedPosts(currentPage, limit, order);

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
