"use server";

import { BASE_URL } from "@/lib/constants";
import { cookies } from "next/headers";
import type { HttpErrorType } from "@/types/error.type";
import type { PostTagsType, UserType, TagType } from "@/types/data.type";
import type { PaginatedType } from "@/types/paginated.type";

export async function getPaginatedPosts(
  currentPage: number,
  limit: number,
  order: string,
  tag: string,
) {
  const response = await fetch(
    `${BASE_URL}/post?page=${currentPage}&limit=${limit}&order=${order}&tag=${tag}`,
    {
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) return data as HttpErrorType;

  return data as PaginatedType<PostTagsType>;
}

export async function getAllTags() {
  const response = await fetch(`${BASE_URL}/tag`, {
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) return data as HttpErrorType;

  return data as TagType[];
}

export async function getUser() {
  const accessToken = (await cookies()).get("access_token")?.value;
  const response = await fetch(`${BASE_URL}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken || "nothing"}`,
    },
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) return data as HttpErrorType;

  return data as UserType;
}
