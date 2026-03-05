export const PREFIX = {
  ADMIN: "/api/v1/admin",
  API_V1: "/api/v1",
};

export const AUTH_ENDPOINT = {
  LOGIN: `${PREFIX.API_V1}/auth/login`,
  REGISTER: `${PREFIX.API_V1}/auth/register`,
  REFRESH: `${PREFIX.API_V1}/auth/refresh`,
};

export const CATEGORY_ENDPOINT = {
  ADMIN_BASE: `${PREFIX.ADMIN}/categories`,
  BASE: `${PREFIX.API_V1}/categories`,
};

export const UPLOAD_ENDPOINT = {
  IMAGE: `${PREFIX.API_V1}/storage/upload`,
  IMAGE_DELETE: (key: string) => `${PREFIX.API_V1}/storage/${key}`,
};
