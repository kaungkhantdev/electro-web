export interface Category {
  error: unknown;
  id: string;
  name: string;
  slug: string;
  description: string;
  parentCategory: string;
  parentId?: string | null;
  status: string;
  image: string;
  isFeatured?: boolean;
}

export interface CategoryPayload {
  name: string;
  description: string;
  image: string;
  status: string;
  isFeatured?: boolean;
  parentId?: string | null;
}
