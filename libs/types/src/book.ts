export interface Book {
  id: string;
  title: string;
  author: string;
  description?: string;
  publishedYear?: number;
  coverImage?: string;
  isbn?: string;
  createdAt?: string;
  updatedAt?: string;
}
