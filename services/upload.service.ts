import apiClient from "@/lib/api/client";
import { UPLOAD_ENDPOINT } from "@/lib/api/endpoint";
import { ApiResponse } from "@/types/api.types";

export interface UploadResponse {
  url: string;
  key: string;
}

export const uploadService = {
  /**
   * POST /api/v1/storage/upload
   * Upload a single image file. Returns the public URL and storage key.
   * Optional `folder` query param to organise files in storage.
   */
  image: (file: File, folder?: string) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiClient
      .post<ApiResponse<UploadResponse>>(UPLOAD_ENDPOINT.IMAGE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        params: folder ? { folder } : undefined,
      })
      .then((res) => res.data.data);
  },

  /**
   * DELETE /api/v1/storage/{key}
   * Delete a previously uploaded file by its storage key.
   */
  deleteImage: (key: string) =>
    apiClient
      .delete<ApiResponse<null>>(UPLOAD_ENDPOINT.IMAGE_DELETE(key))
      .then((res) => res.data.data),
};
