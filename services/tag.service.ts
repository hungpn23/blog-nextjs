import instance from "@/utils/axios";
import type { TagType } from "@/types/data.type";

export async function getAllTags() {
  const { data } = await instance.get<TagType[]>("/tag");
  return data;
}
