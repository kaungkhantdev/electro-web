import apiClient from "@/lib/api/client";
import { BRAND_ENDPOINT } from "@/lib/api/endpoint";
import {
  ApiResponse,
  Brand,
  BrandPayload,
  CursorPaginatedResponse,
} from "@/types";

export const brandService = {
  adminCreate: (payload: BrandPayload) =>
    apiClient
      .post<ApiResponse<Brand>>(BRAND_ENDPOINT.ADMIN_BASE, payload)
      .then((res) => res.data),

  adminGetList: (cursor?: string, limit = 10) =>
    apiClient
      .get<CursorPaginatedResponse<Brand>>(BRAND_ENDPOINT.ADMIN_BASE, {
        params: { cursor, limit },
      })
      .then((res) => res.data),

  adminGetById: (id: string) =>
    apiClient
      .get<ApiResponse<Brand>>(`${BRAND_ENDPOINT.ADMIN_BASE}/${id}`)
      .then((res) => res.data),

  adminUpdate: (id: string, payload: BrandPayload) =>
    apiClient
      .put<ApiResponse<Brand>>(`${BRAND_ENDPOINT.ADMIN_BASE}/${id}`, payload)
      .then((res) => res.data),
};
