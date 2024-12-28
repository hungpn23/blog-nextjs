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

export type LoginResponseType = {
  user: {
    email: string;
    username: string;
    isEmailVerified: boolean;
    bio: string;
    avatar: string;
  };
  accessToken: string;
  refreshToken: string;
};
