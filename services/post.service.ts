import type { PostType } from "@/types/data.type";
import type { PaginatedType } from "@/types/paginated.type";
import instance from "@/utils/axios";

export async function getPaginatedPosts(
  currentPage: number,
  limit: number,
  order: string = "DESC",
  tag?: string,
) {
  const { data } = await instance.get<PaginatedType<PostType>>(
    `/post?page=${currentPage}&limit=${limit}&order=${order}&tag=${tag}`,
  );

  return data as PaginatedType<PostType>;
}
