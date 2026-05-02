export interface ProductBrand {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  parentId: string | null;
  position: number;
}

export interface ProductImagePayload {
  id?: string;
  url: string;
  alt: string;
  position: number;
}

export interface ProductVariantOptionPayload {
  id?: string;
  optionName: string;
  optionValue: string;
}

export interface ProductVariantPayload {
  id?: string;
  name: string;
  sku: string;
  price: number;
  comparePrice: number;
  stock: number;
  image?: string | null;
  isActive?: boolean;
  options: ProductVariantOptionPayload[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  sku: string;
  barcode: string;
  price: number;
  comparePrice: number;
  costPrice: number;
  stock: number;
  lowStockThreshold: number;
  trackInventory: boolean;
  allowBackorder: boolean;
  brand: ProductBrand;
  category: ProductCategory;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  status: string;
  isFeatured: boolean;
  publishedAt: string | null;
  images: ProductImagePayload[];
  variants: ProductVariantPayload[];
}

export interface ProductPayload {
  name: string;
  description: string;
  sku: string;
  barcode: string;
  price: number;
  comparePrice: number;
  costPrice: number;
  stock: number;
  lowStockThreshold: number;
  trackInventory: boolean;
  allowBackorder: boolean;
  brandId: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  status: string;
  isFeatured: boolean;
  publishedAt?: string;
  categoryId: string;
  images: ProductImagePayload[];
  variants: ProductVariantPayload[];
}
