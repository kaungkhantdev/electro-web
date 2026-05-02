import apiClient from "@/lib/api/client";
import { PRODUCT_ENDPOINT } from "@/lib/api/endpoint";
import {
  ProductPayload,
  CursorPaginatedResponse,
  Product,
  ApiResponse,
  UpdateProductDto,
  UpdateVariantDto,
  UpdateImageDto,
} from "@/types";

export const productService = {
  adminCreate: (payload: ProductPayload) =>
    apiClient
      .post<Product>(PRODUCT_ENDPOINT.ADMIN_BASE, payload)
      .then((res) => res.data),

  adminGetList: (cursor?: string, limit = 10) =>
    apiClient
      .get<CursorPaginatedResponse<Product>>(PRODUCT_ENDPOINT.ADMIN_BASE, {
        params: { cursor, limit },
      })
      .then((res) => res.data),

  adminGetById: (id: string) =>
    apiClient
      .get<ApiResponse<Product>>(`${PRODUCT_ENDPOINT.ADMIN_BASE}/${id}`)
      .then((res) => res.data.data),

  adminUpdate: (id: string, payload: UpdateProductDto) =>
    apiClient
      .put(`${PRODUCT_ENDPOINT.ADMIN_BASE}/${id}`, payload)
      .then((res) => res.data),

  adminUpdateVariant: (variantId: string, payload: UpdateVariantDto) =>
    apiClient
      .put(`${PRODUCT_ENDPOINT.ADMIN_BASE}/variants/${variantId}`, payload)
      .then((res) => res.data),

  adminUpdateImage: (imageId: string, payload: UpdateImageDto) =>
    apiClient
      .put(`${PRODUCT_ENDPOINT.ADMIN_BASE}/images/${imageId}`, payload)
      .then((res) => res.data),

  adminDelete: (id: string) =>
    apiClient
      .delete(`${PRODUCT_ENDPOINT.ADMIN_BASE}/${id}`)
      .then((res) => res.data),
};
