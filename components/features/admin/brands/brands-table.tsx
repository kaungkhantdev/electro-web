"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Edit01FreeIcons,
  Folder02FreeIcons,
  Delete02Icon,
  PackageIcon,
} from "@hugeicons/core-free-icons";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useBrandsQuery } from "@/hooks/queries/use-brands";

export function BrandsTable() {
  const [cursorHistory, setCursorHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [limit, setLimit] = useState(10);

  const currentCursor = cursorHistory[currentIndex] || undefined;

  const { data, isLoading } = useBrandsQuery(currentCursor, limit);
  const brands = data?.data ?? [];
  const nextCursor = data?.nextCursor ?? null;

  const handleNextPage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (nextCursor) {
      if (currentIndex === cursorHistory.length - 1) {
        setCursorHistory((prev) => [...prev, nextCursor]);
      }
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevPage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const hasNextPage = !!nextCursor || currentIndex < cursorHistory.length - 1;
  const hasPrevPage = currentIndex > 0;

  if (isLoading && brands.length === 0) {
    return <div className="text-center py-10">Loading brands...</div>;
  }

  if (brands.length === 0) {
    return <div className="text-center py-10">No brands found.</div>;
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => {
          const activePercent = "10%";
          const barWidth = "10%";
          return (
            <div
              key={brand.id}
              className="bg-white border border-gray-200 rounded-3xl p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-primary/10 rounded-lg p-2">
                  <HugeiconsIcon
                    icon={Folder02FreeIcons}
                    className="h-5 w-5 text-primary"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/admin/products/brands/${brand.id}/edit`}
                    className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    title="Edit brand"
                  >
                    <HugeiconsIcon
                      icon={Edit01FreeIcons}
                      className="h-5 w-5 text-primary"
                    />
                  </Link>
                  <button
                    className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-red-600 transition-colors"
                    title="Delete brand"
                  >
                    <HugeiconsIcon
                      icon={Delete02Icon}
                      className="h-5 w-5 text-primary"
                    />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold">{brand.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                {brand.description}
              </p>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <HugeiconsIcon
                      icon={PackageIcon}
                      className="h-3 w-3 text-primary"
                    />
                    10 products
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0"
                  >
                    {activePercent}% active
                  </Badge>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary/60 rounded-full transition-all"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-4">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
          <Select
            value={limit.toString()}
            onValueChange={(val) => {
              setLimit(Number(val));
              setCursorHistory([]);
              setCurrentIndex(0);
            }}
          >
            <SelectTrigger
              className="w-20 rounded-full"
              id="select-rows-per-page"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start" className="rounded-2xl">
              <SelectGroup>
                <SelectItem className="rounded-xl" value="10">
                  10
                </SelectItem>
                <SelectItem className="rounded-xl" value="25">
                  25
                </SelectItem>
                <SelectItem className="rounded-xl" value="50">
                  50
                </SelectItem>
                <SelectItem className="rounded-xl" value="100">
                  100
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrevPage}
                className={`rounded-full ${!hasPrevPage ? "pointer-events-none opacity-50" : ""}`}
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={handleNextPage}
                className={`rounded-full ${!hasNextPage ? "pointer-events-none opacity-50" : ""}`}
                href="#"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
