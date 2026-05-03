"use client";

import { useEffect, useRef } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { useCategoriesInfiniteQuery } from "@/hooks/queries/use-categories";
import type { Category } from "@/types";

interface ParentCategoryComboboxProps {
  onValueChange: (value: string) => void;
  defaultValue?: string | null;
}

export function ParentCategoryCombobox({
  onValueChange,
  defaultValue,
}: ParentCategoryComboboxProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCategoriesInfiniteQuery();

  // Flatten all pages into one item list, prepend "None" option
  const categories = [
    { value: "", label: "" },
    ...(data?.pages.flatMap((page) =>
      page.data.map((cat: Category) => ({ value: cat.id, label: cat.name })),
    ) ?? []),
  ];

  // Sentinel element — when it enters the viewport, load the next page
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const selectedDefault =
    categories.find((c) => c.value === (defaultValue ?? "")) ?? categories[0];

  return (
    <Combobox
      items={categories}
      defaultValue={selectedDefault}
      onValueChange={(val) => onValueChange(String(val?.value ?? ""))}
    >
      <ComboboxInput
        placeholder="Select a category"
        showClear
        className="h-11"
      />
      <ComboboxContent className="">
        <ComboboxEmpty>No categories found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>

        {/* Scroll sentinel — triggers next page fetch when visible */}
        <div ref={sentinelRef} className="py-1 flex justify-center">
          {isFetchingNextPage && (
            <span className="text-xs text-muted-foreground">Loading…</span>
          )}
        </div>
      </ComboboxContent>
    </Combobox>
  );
}
