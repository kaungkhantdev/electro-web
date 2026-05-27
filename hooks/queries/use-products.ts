"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { productService } from "@/services/product.service";

const LIMIT = 10;

export function useProductsInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) =>
      productService.adminGetList(pageParam as string | undefined, LIMIT),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });
}

export function useProductsQuery(cursor?: string, limit = LIMIT) {
  return useQuery({
    queryKey: ["products", cursor, limit],
    queryFn: () => productService.adminGetList(cursor, limit),
  });
}

export function useProductQuery(id: string) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => productService.adminGetById(id),
    enabled: !!id,
  });
}
