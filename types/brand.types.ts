export interface Brand {
  error: unknown;
  id: string;
  name: string;
  description: string;
  logo: string;
}

export interface BrandPayload {
  name: string;
  description: string;
  logo: string;
}
