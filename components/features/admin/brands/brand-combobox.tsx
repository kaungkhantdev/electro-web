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
import type { Brand } from "@/types";
import { useBrandsInfiniteQuery } from "@/hooks/queries/use-brands";

interface BrandComboboxProps {
  onValueChange: (value: string) => void;
}

export function BrandCombobox({ onValueChange }: BrandComboboxProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useBrandsInfiniteQuery();

  // Flatten all pages into one item list, prepend "None" option
  const categories = [
    { value: "", label: "" },
    ...(data?.pages.flatMap((page) =>
      page.data.map((brand: Brand) => ({ value: brand.id, label: brand.name })),
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

  return (
    <Combobox
      items={categories}
      defaultValue={categories[0]}
      onValueChange={(val) => onValueChange(String(val?.value ?? ""))}
    >
      <ComboboxInput placeholder="Select a brand" showClear className="h-11" />
      <ComboboxContent className="">
        <ComboboxEmpty>No brands found.</ComboboxEmpty>
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
