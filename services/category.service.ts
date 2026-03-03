import apiClient from "@/lib/api/client";
import { CATEGORY_ENDPOINT } from "@/lib/api/endpoint";
import { Category, CategoryPayload } from "@/types";

export const categoryService = {
  create: (payload: CategoryPayload) =>
    apiClient
      .post<Category>(CATEGORY_ENDPOINT.CREATE, payload)
      .then((res) => res.data),
};
