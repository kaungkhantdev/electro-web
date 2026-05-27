import apiClient from "@/lib/api/client";
import { CATEGORY_ENDPOINT } from "@/lib/api/endpoint";
import { Category, CategoryPayload, CursorPaginatedResponse } from "@/types";

export const categoryService = {
  adminCreate: (payload: CategoryPayload) =>
    apiClient
      .post<Category>(CATEGORY_ENDPOINT.ADMIN_BASE, payload)
      .then((res) => res.data),

  adminGetList: (cursor?: string, limit = 10) =>
    apiClient
      .get<CursorPaginatedResponse<Category>>(CATEGORY_ENDPOINT.ADMIN_BASE, {
        params: { cursor, limit },
      })
      .then((res) => res.data),

  adminGetById: (id: string) =>
    apiClient
      .get<Category>(`${CATEGORY_ENDPOINT.ADMIN_BASE}/${id}`)
      .then((res) => res.data),

  adminUpdate: (id: string, payload: CategoryPayload) =>
    apiClient
      .put<Category>(`${CATEGORY_ENDPOINT.ADMIN_BASE}/${id}`, payload)
      .then((res) => res.data),
};
