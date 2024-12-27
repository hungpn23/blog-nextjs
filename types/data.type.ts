export type PostType = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  wordCount: number;
  readingTime: number;
  tags: TagType[];
};

export type TagType = {
  id: string;
  name: string;
};
