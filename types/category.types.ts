export interface Category {
  error: unknown;
  id: string;
  name: string;
  slug: string;
  description: string;
  parentCategory: string;
  status: string;
  image: string;
}

export interface CategoryPayload {
  name: string;
  description: string;
  image: string;
  status: string;
  isFeatured?: boolean;
  parentId?: string | null;
}
