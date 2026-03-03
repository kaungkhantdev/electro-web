export interface ApiMeta {
  statusCode: number;
  timestamp: string;
  path: string;
  requestId: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginationQuery {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  meta: ApiMeta;
}

export interface PaginatedApiResponse<T = unknown> {
  success: boolean;
  data: T[];
  meta: ApiMeta & {
    pagination: PaginationMeta;
  };
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
  meta: ApiMeta;
}

export function isApiError(res: unknown): res is ApiErrorResponse {
  return (
    typeof res === "object" &&
    res !== null &&
    "success" in res &&
    (res as ApiErrorResponse).success === false &&
    "message" in res
  );
}
