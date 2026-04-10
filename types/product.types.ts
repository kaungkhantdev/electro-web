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
  brand: string;
  vendor: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  status: string;
  isFeatured: boolean;
  publishedAt: string;
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
  brand: string;
  vendor: string;
  tags: string;
  metaTitle: string;
  metaDescription: string;
  status: string;
  isFeatured: boolean;
  publishedAt: string;
  categoryId: string;
  images: ProductImagePayload[];
  variants: ProductVariantPayload[];
}

export interface ProductImagePayload {
  url: string;
  alt: string;
  position: number;
}

export interface ProductVariantPayload {
  name: string;
  sku: string;
  price: number;
  comparePrice: number;
  stock: number;
  options: ProductVariantOptionPayload[];
}

export interface ProductVariantOptionPayload {
  optionName: string;
  optionValue: string;
}
