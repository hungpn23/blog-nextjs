export interface IPost {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  wordCount: number;
  readingTime: number;
  tags: ITag[];
}

export interface ITag {
  id: string;
  name: string;
}
