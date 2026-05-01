import apiClient from "@/lib/api/client";
import { PRODUCT_ENDPOINT } from "@/lib/api/endpoint";
import { ProductPayload, CursorPaginatedResponse, Product } from "@/types";

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
};
