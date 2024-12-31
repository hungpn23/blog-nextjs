"use server";

import { AxiosService } from "@/lib/axios";
import type { TagType } from "@/types/data.type";
import type { PostTagsType, UserType } from "@/types/data.type";
import { HttpErrorType } from "@/types/error.type";
import type { PaginatedType } from "@/types/paginated.type";
import { AxiosError } from "axios";

export async function getPaginatedPosts(
  currentPage: number,
  limit: number,
  order: string,
  tag: string,
) {
  const response = await AxiosService.get<PaginatedType<PostTagsType>>(
    `/post?page=${currentPage}&limit=${limit}&order=${order}&tag=${tag}`,
  ).catch((error: AxiosError<HttpErrorType>) => {
    console.error("[ERROR] getPaginatedPosts:", error);
    return undefined;
  });

  return response?.data;
}

export async function getAllTags() {
  const response = await AxiosService.get<TagType[]>(`/tag`).catch(
    (error: AxiosError<HttpErrorType>) => {
      console.error("[ERROR] getAllTags:", error);
      return undefined;
    },
  );

  return response?.data;
}

export async function getProfile() {
  const response = await AxiosService.get<UserType>(`/user`).catch(
    (error: AxiosError<HttpErrorType>) => {
      console.error("[ERROR] getProfile:", error);
      return undefined;
    },
  );

  return response?.data;
}
