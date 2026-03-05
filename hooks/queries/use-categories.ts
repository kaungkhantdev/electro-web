"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { categoryService } from "@/services/category.service";

const LIMIT = 10;

export function useCategoriesInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: ["categories"],
    queryFn: ({ pageParam }) =>
      categoryService.adminGetList(pageParam as string | undefined, LIMIT),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });
}
