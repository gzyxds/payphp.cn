export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph?: string;
  description?: string;
  mainImage?: string;
  author: Author;
  tags: string[];
  publishedAt: string;
  slug: string;
  category?: string;
  published?: boolean;
  body?: string;
};
