"use server";

import instance from "@/utils/axios";
import type { PostType } from "@/types/data.type";
import type { TagType } from "@/types/data.type";
import type { PaginatedType } from "@/types/paginated.type";

export async function getPaginatedPosts(
  currentPage: number,
  limit: number,
  order: string = "DESC",
  tag: string,
) {
  const { data } = await instance.get<PaginatedType<PostType>>(
    `/post?page=${currentPage}&limit=${limit}&order=${order}&tag=${tag}`,
  );

  return data as PaginatedType<PostType>;
}

export async function getAllTags() {
  const { data } = await instance.get<TagType[]>("/tag");
  return data;
}
