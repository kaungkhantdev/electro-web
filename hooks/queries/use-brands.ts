"use client";

import { brandService } from "@/services/brand.service";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const LIMIT = 10;

export function useBrandsInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: ["brands"],
    queryFn: ({ pageParam }) =>
      brandService.adminGetList(pageParam as string | undefined, LIMIT),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });
}

export function useBrandsQuery(cursor?: string, limit = LIMIT) {
  return useQuery({
    queryKey: ["brands", cursor, limit],
    queryFn: () => brandService.adminGetList(cursor, limit),
  });
}

export function useBrandQuery(id: string) {
  return useQuery({
    queryKey: ["brands", id],
    queryFn: () => brandService.adminGetById(id),
    enabled: !!id,
  });
}
